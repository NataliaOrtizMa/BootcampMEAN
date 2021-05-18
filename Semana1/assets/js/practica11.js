// Arrays
//  Declarar array vacío
let personas = [];
// Declarar array con datos
const animales = ["Perro", "Gato", "Lobo", "Conejo", "Serpiente", "Cocodrilo"];

console.log("Personas: " + personas, "Animales: " + animales);
console.log(animales.length);

for (let i=0; i<animales.length; i++) {
    console.log(animales[i])
}

animales[6] = "Dragón";

animales.push("Ardilla");
animales.unshift("Tigre");

console.log("El ultimo animal es " + animales.pop());
console.log("El primer animal es " + animales.shift());

// delete animales[5];
animales.splice(5,1);

console.log(animales);