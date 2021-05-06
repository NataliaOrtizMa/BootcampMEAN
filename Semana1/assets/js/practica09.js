let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");

const registroNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    this.nombre.innerHTML = "Nombre: " + nombre;
}

btnPrueba.onclick = () => {
    registroNombre();
}