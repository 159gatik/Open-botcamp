const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("click en el botón")
})


$(".btn-jq").click(() => {
    console.log("Hola, estoy utilizando jQuery");
})