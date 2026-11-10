const estudiantes = [
    {id:1, nombre: 'Ana', edad : 20},
    {id:2, nombre: 'Juan', edad : 22},
    {id:3, nombre: 'Maria', edad : 21},
]

const mostrarId = new Promise ((buscarId) => {
    console.log ('Buscando en los registros...');
    setTimeout (() => id === id ('Usuario encontrado'), 3000);
})

function buscarId (id, nombre) {
    for (const estudiantes of id) {
        if (estudiantes.id === id) {
            return console.log (`Id: ${id}, Nombre del usuario: ${estudiantes.nombre}, Edad: ${estudiantes.edad}`)
        } else {
            return console.log ('Error: No existe un estudiante con ese ID.')
        }
    }
}

console.log (mostrarId)
