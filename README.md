# Aplicacion de tareas por hacer basica, hecha a traves de node con yargs.

Aplicacion 'to-do' basica, en la cual se puede crear una tarea, listar todas, listar solo no completadas, solo completadas, borrar y marcar como completada o no completada. 

Para bajar las dependencias:

```
$ npm install
```

Para ver todas las opciones y su uso:

```
$ node app --help
```

Operaciones:

```
$ node app crear -d "Nueva tarea"
$ node app listar 
$ node app listar -c
$ node app listar -c false
$ node app actualizar -d "Nueva tarea" -c
$ node app borrar -d "Nueva tarea"
```

