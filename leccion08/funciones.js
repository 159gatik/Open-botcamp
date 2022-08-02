// - Una función sin parámetros que devuelva siempre "true"

function primerFuncion() {
    return true
}

primerFuncion()

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function segundaFuncion() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
segundaFuncion()


// - Una función generadora de índices pares automáticos

function* pares() {
    let id = 0
    while (true) {
        yield id += 2
    }
}

const indicesPares = pares()

console.log(indicesPares.next().value);

console.log(indicesPares.next().value);

console.log(indicesPares.next().value);

console.log(indicesPares.next().value);