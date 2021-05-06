// MiniCalculadora
const MiniCalculadora = () => {
    // creamos opcion de menu
    let op = prompt("Escriba la opcion correspondiente a la operación: \n A - Suma \n B - Restar \n C - Multiplicar \n D -Dividir");
    
    if (op == null) {
        alert("Debe ingresar algún dato");
    } else {
        
        op = op.toLowerCase();
        if (op != "a" && op != "b" && op != "c" && op != "d") {
            alert("Debe ser una opción entre A y D");
            
        } else {
            let num1 = parseFloat(prompt("Ingresa el primer numero"));
            let num2 = parseFloat(prompt("Ingresa el segundo numero"));
            let resultado = 0;
            if (op == "a") resultado = num1 + num2;
            if (op == "b") resultado = num1 - num2;
            if (op == "c") resultado = num1 * num2;
            if (op == "d") {
                if (num2 === 0) {
                    return alert("No se puede dividir entre cero");
                } else {
                    resultado = num1 / num2;
                }
            }
            alert("El resultado es: " + resultado)
        }
    }
}