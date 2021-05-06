/**
 * Operaciones
 */

// Suma de dos numeros
const sumaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    console.log(num1, num2);
    let resultado = num1 + num2;
    console.log(resultado);
}

// Rest de dos numeros
const restaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    console.log(num1, num2);
    let resultado = num1 - num2;
    console.log(resultado);
}

// Multiplicacion de dos numeros
const multDosNumeros = () => {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    console.log(num1, num2);
    let resultado = num1 * num2;
    console.log(resultado);
}

// Division de dos numeros
const dividirDosNumeros = () => {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    // if (num2 != 0) {
    //     console.log(num1, num2);
    //     let resultado = num1 / num2;
    //     console.log(resultado);
    // } else {
    //     console.log("No se puede dividir por cero")
    //     dividirDosNumeros();
    // }
    resultado = num2 == 0 ? "No se puede dividir por cero" 
                : num1 / num2
    console.log(resultado);
}