
require('colors');
 

const mostrarMenu = async() =>{

    return new Promise( resolve => {
        console.clear();
        console.log('========================='.blue);
        console.log('  SELECCIONE UN OPCION'.red);
        console.log('========================='.blue);

        console.log(`${'1.'.blue} Crear tarea.`);
        console.log(`${'2.'.blue} Listar tarea.`);
        console.log(`${'3.'.blue} Listar tarea completadas.`);
        console.log(`${'4.'.blue} Listar tarea pendientes.`);
        console.log(`${'5.'.blue} Completar tarea.`);
        console.log(`${'6.'.blue} Borrar tarea.`);
        console.log(`${'0.'.blue} Salir.`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opcion: ', (answer) =>{
            readLine.close();
            resolve(answer);
        });
    });
        
}


const pausa = () =>{
    return new Promise( resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.magenta} para continuar.`, (answer) =>{
            readLine.close();
            resolve(answer);
        });

        
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}