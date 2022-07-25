// - Un objeto con tus datos personales(nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Gaston",
    apellido: "Rojas",
    edad: 24,
    altura: 169,
    isDeveloper: true
}
//  - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datos.edad
console.log(edad);

//  - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig @s
const amigo1 =
{
    nombre: "Ivan",
    apellido: "Acosta",
    edad: 25,
    altura: 173,
    isDeveloper: false
}

const amigo2 =
{
    nombre: "Braian",
    apellido: "Acosta",
    edad: 27,
    altura: 170,
    isDeveloper: false
}

const lista = [
    { ...datos },
    { ...amigo2 },
    { ...amigo1 }
]
console.log(lista);
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

lista.sort((a, b) => a.edad - b.edad)

console.log(lista);