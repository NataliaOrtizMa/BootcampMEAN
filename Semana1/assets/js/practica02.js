/**
 * Ejercicio 8
 * Condicional if / else
 */
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

if (edad >= 18) {
    console.log("Puedes ver películas violentas");
} else {
    console.log("No puedes ver estas películas");
}

/** Condicional switch */
switch (edad) {
    case "18":
        console.log("Puedes ver películas violentas")
        break;
    default:
        console.log("No puedes ver estas películas");
        break;
}