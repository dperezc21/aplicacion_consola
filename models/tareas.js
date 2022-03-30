require('colors');
const { leerTareas } = require("../fs/fileSistems");
const Tarea = require("./tarea");


class Tareas{
    constructor(){
        this._listado = {};
    }

    get arrayTareas (){
        const lista = [];
        
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key]
            lista.push(tarea);
        });
        //console.log(lista);
        return lista;
    }

    

    
    crearTarea(desc){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


    listadoCompleto(){
        const tareas = leerTareas();
        let salida = "";

        tareas.forEach((tarea, index) =>{
            index = index +1;
            if (tarea.completadoEn){
                salida += `${ (""+index).green}. ${tarea.desc} ===> ${'completado'.green} \n`;
            }else{
                salida += `${ (""+index).green}. ${tarea.desc} ===> ${'Pendiente'.red} \n`;
            }
        });
        console.log(salida);
    }

    tareasPendientes (){
        const tareas = leerTareas();
        let salida = "";
        let index = 1; 
        tareas.forEach((tarea) =>{
            if (!tarea.completadoEn){
                salida += `${ (""+index).green}. ${tarea.desc} ===> ${'Pendiente'.red} \n`;
                ++index;
            }
        });
        console.log(salida);
    }
        tareasCompletadas (){
            const tareas = leerTareas();
            let salida = "";
            let index = 1;
            tareas.forEach((tarea) =>{
                if (tarea.completadoEn){
                    salida += `${ (""+index).green}. ${tarea.desc} ===> ${'completado'.green} \n`;
                    ++index;
                }
            });
            console.log(salida);
        }


    borrarTarea(id =""){
        if(this._listado[id]){
            delete this._listado[id];
            
            
        }
    }


}

module.exports = Tareas;