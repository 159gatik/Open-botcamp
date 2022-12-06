const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("estoy arrastrando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        // const elemento_fantasma = document.querySelector(".imagen-fantasma")
        // event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        console.log("termine de arrastrar");
        parrafo.classList.remove("dragging")
    })
})
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")
papelera.addEventListener("dragover", evento => {
    evento.dataTransfer.dropEffect = "copy"
    evento.preventDefault()
})

papelera.addEventListener("drop", evento => {
    const parrafo = evento.dataTransfer.getData("id")
    document.getElementById(parrafo).remove()
})