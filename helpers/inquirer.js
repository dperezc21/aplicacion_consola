require('colors');
const inquire = require('inquirer');

const pregunta = [
    {
        type:'list',
        name:'option',
        message:'¿Que desea hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.rainbow} Crear Tarea`
            },
            {
                value:'2',
                name:`${'2.'.rainbow} Listar Tareas`
            },
            {
                value:'3',
                name:`${'3.'.rainbow} Listar Tarea completada`
            },
            {
                value:'4',
                name:`${'4.'.rainbow} Listar Tarea Pendiente`
            },
            {
                value:'5',
                name:`${'5.'.rainbow} Completar Tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.rainbow} Borrar Tarea`
            },
            {
                value:'0',
                name:`${'0.'.rainbow} Salir`
            }
        ]
    }
]


const menu = async()=>{
    //console.clear();
    console.log('========================='.blue);
    console.log('  SELECCIONE UN OPCION'.red);
    console.log('========================='.blue);

    const result =await inquire.prompt(pregunta);
    return result.option;
    
}

const pausa = ()=>{
    const pregunta =[
        {
            type: 'input',
            name: 'enter',
            message: `Presiones ${ 'Enter'.green} para continuar.`,
        }
    ]

    const result = inquire.prompt(pregunta);
    return result;
}

const leerInput = async(message) =>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return "Por favor ingrese un valor";
                }
                return true;
            }
        }
    ];

    const input = await inquire.prompt(question);
    return input.desc; 
}

const menuBorarTarea = async(tareas) =>{

    const choices = tareas.map( (tarea, i) => {
        index = (i+1)+'.';
        return {
            value:tarea.id,
            name:`${index.blue} ${tarea.desc}`
        };
    });

    const preguntas = [{
        type:'list',
        name:'id',
        message:'Borrar',
        choices

        }]

    const {id} = await inquire.prompt(preguntas);
    return id;

}

module.exports = {
    menu,
    pausa,
    leerInput,
    menuBorarTarea
}