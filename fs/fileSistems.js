const fs =require('fs');
const rutaArchivo = './db/tareas.json';

const guardarTareas = (data) =>{
    fs.writeFileSync(rutaArchivo, JSON.stringify(data));
}

const leerTareas = () => {
    if(!fs.existsSync(rutaArchivo)){
        return null;
    }
    
    const data = fs.readFileSync(rutaArchivo, {encoding:'utf-8'});
    //console.log( JSON.parse(data));
    return JSON.parse(data);
}

//const t = leerTareas();
//delete t['e5d53f44-903d-4007-a9ad-24b53c357103'];
//console.log(t[1]);

module.exports ={
    guardarTareas,
    leerTareas
}