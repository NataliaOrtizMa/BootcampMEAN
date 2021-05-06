/**
 * Ejercicio 9
 * Dia de la semana
 */

let dia = prompt("Ingresa dia de la semana");

// if (dia == null) {
//     console.log("Por favor ingresa un día a la semana");
// } else {
//     dia = dia.toLowerCase(); // toUpperCase mayuscula
//     // console.log("Dato valido")

//     if(dia == "sabado" || dia == "domingo") {
//         console.log("Es fin de semana");
//     }
//     else {
//         if (
//             dia == "lunes" ||
//             dia == "martes" ||
//             dia == "miercoles" ||
//             dia == "jueves" ||
//             dia == "viernes"
//         ) {
//             console.log("Dia entre semana");
//         }
//         else {
//             console.log("Ingresa un día a la semana válido");   
//         }
//     }
// }

switch (dia) {
    case null:
        console.log("Por favor ingresa un día a la semana");
        break;
    case "sabado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Ingresa un día a la semana válido");  
        break;
}

