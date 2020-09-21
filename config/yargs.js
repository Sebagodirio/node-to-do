const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    defualt: true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'actualiza una tarea por hacer', { descripcion, completado })
    .command('borrar', 'borra una tarea con la descripcion mandada', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}