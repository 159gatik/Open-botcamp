// Cadena de texto con nombre
let nombre = "Gastón"

// Cadena de texto con apellido
let apellido = "Rojas"

// Cadena de texto concatenando
let estudiante = nombre.concat(" ", apellido)
console.log(estudiante)

// Cadena de texto con mayuscula y minuscula
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

// Variable que contiene el numero de letras
let letrasNum = estudiante.length

// Variable que contiene la primer letra del nombre y ultima del apellido.
let primerLetra = nombre.charAt("0")
let ultimaLetra = apellido.substring("4")

// Cadena de texto que elimina los espacios
let cadena = estudiante.replace(/ /g, " ")
console.log(cadena)

//Variable booleana que verifica el contenido
let palabra = estudiante.includes(nombre)
console.log(palabra)