
require('colors');
const { guardarTareas, leerTareas } = require('./fs/fileSistems');
const { menu, pausa, leerInput, menuBorarTarea } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {
    let opt ='';
    const tareas = new Tareas();

    const tareasDB = leerTareas();


    do {
        
        opt = await menu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Description: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.tareasCompletadas();
                break;
            case '4':
                tareas.tareasPendientes();
                break;
            case '5':
                break;
            case '6':
                const id = await menuBorarTarea(tareas.arrayTareas);
                tareas.borrarTarea(id);
                
                break;
    
        }
        guardarTareas(tareas.arrayTareas);
        await pausa();
    } while (opt !== '0');
    
    
}

main();