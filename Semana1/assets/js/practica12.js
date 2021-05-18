// JSON - XML - req -res

let persona = {
    nombre: "Pepe",
    edad: 45,   
    documento: "3545452",
    hijos: false,
    sueldo: 25.6,
};

console.log(persona);

let personaJson = JSON.stringify(persona);
console.log(personaJson);

console.log(JSON.parse(personaJson))