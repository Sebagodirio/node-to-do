const argv = require('./config/yargs').argv
const colors = require('colors')
const porHacer = require('./to-do/to-do')

const listarTareas = tareas => {
    for (let tarea of tareas) {
        console.log('========Por hacer========='.green)
        console.log(tarea.descripcion)
        console.log('Estado: ', tarea.completado)
        console.log('=========================='.green)
    }
}

let comando = argv._[0]

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break
    case 'listar':

        let listado

        if (!argv.c) {

            listado = porHacer.getListado()
        } else {
            listado = porHacer.listarFiltrado(argv.c)
        }

        listarTareas(listado)
        break
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar)
        break
    default:
        console.log('Comando no reconocido.')

}