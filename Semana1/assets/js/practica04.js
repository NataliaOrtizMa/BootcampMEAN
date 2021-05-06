/**
 * Funciones
 */
function prueba1() {
    console.log("Prueba1")
}
const  prueba2 = () => {
    console.log("Prueba 2")
}

prueba1();
prueba2();

// Suma de dos numeros
const sumaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    console.log(num1, num2);
    let resultado = num1 + num2;
    console.log(resultado);
}

