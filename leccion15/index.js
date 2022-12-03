const nombre = "Gaston"
const apellido = "Rojas"

const obj = {
    nombre,
    apellido
}

// - Almacena el objeto anterior en la SessionStorage

sessionStorage.setItem("persona-session", JSON.stringify(obj))
console.log(JSON.parse(sessionStorage.getItem("persona-session")));

// - Almacena el objeto anterior en la LocalStorage

localStorage.setItem("persona-local", JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem("persona-local")));

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

const coo = new Date()

console.log(document.cookie = `nombreCookie=${JSON.stringify(obj)};expires=${new Date(coo.getTime() + 2 * 60000)}`)
