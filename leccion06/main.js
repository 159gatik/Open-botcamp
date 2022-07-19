// Una variable que contenga la lista de la compra(mínimo 5 elementos)

const listaCompras = ["manteca", "fideos", "azucar", "cafe", "agua", "desodorante"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompras.splice(6, 0, "Aceite de Girasol")

console.log(listaCompras);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompras.pop()

console.log(listaCompras);

//  Una lista de tus 3 películas favoritas(objetos con propiedades: titulo, director, fecha)

const peliculasFavoritas = [
    { titulo: "Interestelar", director: "Christopher Nolan", fecha: 2014 },
    { titulo: "La lista de Schindler", director: "Steven Spielberg", fecha: 1994 },
    { titulo: "El poder del perro", director: "Jane Campion", fecha: 2021 },
]
console.log(peliculasFavoritas);

//  Una nueva lista que contenga las películas posteriores al 1 de enero de 2010(utilizando filter)

const filtrarListas = peliculasFavoritas.filter(o => o.fecha > 2010)
console.log(filtrarListas);

// Una nueva lista que contenga los directores de la lista de películas original(utilizando map)

const directores = peliculasFavoritas.map(d => {
    return d.director
})
console.log(directores)

//  Una nueva lista que contenga los títulos de la lista de películas original(utilizando map)
const titulos = peliculasFavoritas.map(t => {
    return t.titulo
})
console.log(titulos)


//  Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando concat)

let d = directores.concat(titulos)
console.log(d);

// Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando el factor de propagación)

let c = [...directores, ...titulos]

console.log(c);
