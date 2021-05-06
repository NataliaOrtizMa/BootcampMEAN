/**
 * 5 departamentos A B C D E
 * luego c/u 4 ciudades A B C D
 * luego c/u 3 platos tipicos A B C
 * luego mostrar receta
 */

const validarCiudad = (ciudad) => {
    if (ciudad == null) {
        alert("Debe ingresar algún dato");
    }
    else {
        ciudad = ciudad.toUpperCase();
        if (ciudad == "A" || ciudad == "B" || ciudad == "C" || ciudad == "D") {
            return ciudad;
        } else {
            alert("Ciudad debe ser una opción entre A y D");
        }
    }
}

const cundinamarca = () => {
    ciudad = prompt("CUNDINAMARCA \n Escriba la opcion correspondiente a la CIUDAD: \n A - Bogotá \n B - Soacha \n C - Zipaquirá \n D - Chía");
        cityOption = validarCiudad(ciudad);
        switch (cityOption) {
            case "A":
                ciudad = prompt("BOGOTÁ \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Ajiaco \n B - Chocolate Santafereño \n C - Changua");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/ajiaco-colombiano/" :
                            ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/chocolate-santafereno/" :
                            ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/?s=changua/" : "";
                foodName = ciudad == 'A' ? "Ajiaco" : ciudad == 'B' ? "Chocolate Santafereño" : ciudad == 'C' ? "Changua" : "";
                prompt(foodName , receta);
                break;
            case "B":
                ciudad = prompt("SOACHA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Fritanga \n B - Garullas \n C - Almojábanas");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/picada-o-fritanga-colombiana/" :
                            ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/garullas-colombianas/" :
                            ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/almojabanas-colombianas/" : "";
                foodName = ciudad == 'A' ? "Fritanga" : ciudad == 'B' ? "Garullas" : ciudad == 'C' ? "Almojábanas" : "";
                prompt(foodName , receta);
                break;
            case "C":
                ciudad = prompt("ZIPAQUIRÁ \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Sobrebarriga al horno \n B - Papa salada \n C - Cuajada con melado");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/sobrebarriga-al-horno/" :
                            ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/papa-salada-colombiana/" :
                            ciudad == 'C' ? "https://colombia.gastronomia.com/noticia/7184/receta-cuajada-de-melao" : "";
                foodName = ciudad == 'A' ? "Sobrebarriga al horno" : ciudad == 'B' ? "Papa salada" : ciudad == 'C' ? "Cuajada con melado" : "";
                prompt(foodName , receta);
                break;
            case "D":
                ciudad = prompt("CHÍA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Masato \n B - Chicha \n C - Merengón");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/masato-de-arroz/" :
                            ciudad == 'B' ? "https://www.colombia.com/gastronomia/recetas-colombianas/chicha-r182" :
                            ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/merengon-de-fresas/" : "";
                foodName = ciudad == 'A' ? "Masato" : ciudad == 'B' ? "Chicha" : ciudad == 'C' ? "Merengón" : "";
                prompt(foodName , receta);
                break;
            default:
                break;
        }
}
const antioquia = () => {
    ciudad = prompt("ANTIOQUIA \n Escriba la opcion correspondiente a la CIUDAD: \n A - Medellín \n B - Caracolí \n C - Segovia \n D - Ituango");
        cityOption = validarCiudad(ciudad);
        switch (cityOption) {
            case "A":
                ciudad = prompt("MEDELLÍN \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Bandeja paisa \n B - Mondongo \n C - Arepa paisa");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/bandeja-paisa/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/sopa-de-mondongo-colombiano/" :
                         ciudad == 'C' ? "https://cookpad.com/co/recetas/4612426-arepas-paisas-o-antioquenas?ref=search&search_term=arepa%20paisa" : "";
                foodName = ciudad == 'A' ? "Bandeja paisa" : ciudad == 'B' ? "Mondongo" : ciudad == 'C' ? "Arepa paisa" : "";
                prompt(foodName , receta);
                break;
            case "B":
                ciudad = prompt("CARACOLÍ \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Sancocho paisa \n B - Tortilla paisa \n C - Fríjoles");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/sancocho-antioqueno-o-paisa/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/tortilla-paisa-o-antioquena/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/frijoles-colombianos/" : "";
                foodName = ciudad == 'A' ? "Sancocho paisa" : ciudad == 'B' ? "Tortilla paisa" : ciudad == 'C' ? "Fríjoles" : "";
                prompt(foodName , receta);
                break;
            case "C":
                ciudad = prompt("SEGOVIA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Sobrebarriga en salsa criolla \n B - Calentado \n C - Chicharrón");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/sobrebarriga-en-salsa-criolla/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/calentado-colombiano/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/chicharron-colombiano/" : "";
                foodName = ciudad == 'A' ? "Sobrebarriga en salsa criolla" : ciudad == 'B' ? "Calentado" : ciudad == 'C' ? "Chicharrón" : "";
                prompt(foodName , receta);
                break;
            case "D":
                ciudad = prompt("ITUANGO \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Hogao \n B - Bandeja paisa \n C - Tamales antioqueños");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/hogao-colombiano/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/bandeja-paisa/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/tamales-antioquenos/" : "";
                foodName = ciudad == 'A' ? "Masato" : ciudad == 'B' ? "Chicha" : ciudad == 'C' ? "Fríjoles" : "";
                prompt(foodName , receta);
                break;
            default:
                break;
        }
}
const valle = () => {
    ciudad = prompt("VALLE DEL CAUCA \n Escriba la opcion correspondiente a la CIUDAD: \n A - Cali \n B - Palmira \n C - Tuluá \n D - Buga");
        cityOption = validarCiudad(ciudad);
        switch (cityOption) {
            case "A":
                ciudad = prompt("CALI \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Sancocho valluno \n B - Champús \n C - Cholado");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/sancocho-de-gallina-o-valluno/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/champus/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/cholado-colombiano/" : "";
                foodName = ciudad == 'A' ? "Sancocho valluno" : ciudad == 'B' ? "Champús" : ciudad == 'C' ? "Cholado" : "";
                prompt(foodName , receta);
                break;
            case "B":
                ciudad = prompt("PALMIRA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Arroz atollado \n B - Chuleta valluna \n C - Aborrajados");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/arroz-atollado-de-pollo-y-chorizo/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/chuleta-valluna/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/aborrajados-de-platano-maduro/" : "";
                foodName = ciudad == 'A' ? "Arroz atollado" : ciudad == 'B' ? "Chuleta valluna" : ciudad == 'C' ? "Aborrajados" : "";
                prompt(foodName , receta);
                break;
            case "C":
                ciudad = prompt("TULUÁ \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Bistec a caballo \n B - Chuyaco \n C - Pandebono");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/bistec-a-caballo/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/chuyaco/" :
                         ciudad == 'C' ? "https://cookpad.com/co/recetas/12041129-pandebonos-vallunos" : "";
                foodName = ciudad == 'A' ? "Bistec a caballo" : ciudad == 'B' ? "Chuyaco" : ciudad == 'C' ? "Pandebono" : "";
                prompt(foodName , receta);
                break;
            case "D":
                ciudad = prompt("BUGA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Panderos \n B - Caldo batido \n C - Marranitos");
                receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/panderos-colombianos/" :
                         ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/caldo-batido-o-caldo-de-enfermo/" :
                         ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/marranitas-o-puerquitas/" : "";
                foodName = ciudad == 'A' ? "Panderos" : ciudad == 'B' ? "Caldo batido" : ciudad == 'C' ? "Marranitos" : "";
                prompt(foodName , receta);
                break;
            default:
                break;
        }
}
const atlantico = () => {
    ciudad = prompt("ATLÁNTICO \n Escriba la opcion correspondiente a la CIUDAD: \n A - Barranquilla \n B - Soledad \n C - Malambo \n D - Sabanalarga");
    cityOption = validarCiudad(ciudad);
    switch (cityOption) {
        case "A":
            ciudad = prompt("BARRANQUILLA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Mojarra frita \n B - Bollo limpio \n C - Cazuela de mariscos");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/pescado-frito-colombiano/" :
                     ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/bollo-limpio/" :
                     ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/cazuela-de-mariscos-colombiana/" : "";
            foodName = ciudad == 'A' ? "Mojarra frita" : ciudad == 'B' ? "Bollo limpio" : ciudad == 'C' ? "Cazuela de mariscos" : "";
            prompt(foodName , receta);
            break;
        case "B":
            ciudad = prompt("SOLEDAD \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Bocachico en salsa \n B - Bollo de yuca \n C - Arepa de huevo");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/viudo-de-pescado/" :
                     ciudad == 'B' ? "https://www.mycolombianrecipes.com/es/bollo-de-yuca/" :
                     ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/arepa-de-huevo/" : "";
            foodName = ciudad == 'A' ? "Bocachico en salsa" : ciudad == 'B' ? "Bollo de yuca" : ciudad == 'C' ? "Arepa de huevo" : "";
            prompt(foodName , receta);
            break;
        case "C":
            ciudad = prompt("MALAMBO \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Mote de queso \n B - Butifarra \n C - Carimañolas");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/mote-de-queso/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/484968-butifarra" :
                     ciudad == 'C' ? "https://cookpad.com/co/recetas/11974776-carimanolas" : "";
            foodName = ciudad == 'A' ? "Mote de queso" : ciudad == 'B' ? "Butifarra" : ciudad == 'C' ? "Carimañolas" : "";
            prompt(foodName , receta);
            break;
        case "D":
            ciudad = prompt("SABANALARGA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Cayeye \n B - Enyucado \n C - Chicharrón");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/cayeye-y-cabeza-de-gato/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/13715886-enyucado" :
                     ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/chicharron-colombiano/" : "";
            foodName = ciudad == 'A' ? "Cayeye" : ciudad == 'B' ? "Enyucado" : ciudad == 'C' ? "Chicharrón" : "";
            prompt(foodName , receta);
            break;
        default:
            break;
    }
}
const santander = () => {
    ciudad = prompt("SANTANDER \n Escriba la opcion correspondiente a la CIUDAD: \n A - Bucaramanga \n B - Barrancabermeja \n C - Floridablanca \n D - Barichara");
    cityOption = validarCiudad(ciudad);
    switch (cityOption) {
        case "A":
            ciudad = prompt("BUCARAMANGA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Arepa santandereana \n B - Hormigas culonas \n C - Changua");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/arepa-santandereana-arepa-from-santander/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/11051704-hormigas-culonas" :
                     ciudad == 'C' ? "https://www.mycolombianrecipes.com/es/?s=changua" : "";
            foodName = ciudad == 'A' ? "Arepa santandereana" : ciudad == 'B' ? "Hormigas culonas" : ciudad == 'C' ? "Changua" : "";
            prompt(foodName , receta);
            break;
        case "B":
            ciudad = prompt("BARRANCABERMEJA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Mute santandereano \n B - Cabrito \n C - Hayacas");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/picada-o-fritanga-colombiana/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/723256-cabrito-a-lena" :
                     ciudad == 'C' ? "https://cookpad.com/co/recetas/14156538-hayacas-santandereanas" : "";
            foodName = ciudad == 'A' ? "Mute santandereano" : ciudad == 'B' ? "Cabrito" : ciudad == 'C' ? "Hayacas" : "";
            prompt(foodName , receta);
            break;
        case "C":
            ciudad = prompt("FLORIDABLANCA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Regañonas \n B - Pepitoria \n C - Tamal santandereano");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/es/reganonas-o-torticas-de-maiz/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/14960545-pollo-en-pepitoria" :
                     ciudad == 'C' ? "https://cookpad.com/co/recetas/194594-como-hacer-tamales-santandereanos" : "";
            foodName = ciudad == 'A' ? "Regañonas" : ciudad == 'B' ? "Pepitoria" : ciudad == 'C' ? "Tamal santandereano" : "";
            prompt(foodName , receta);
            break;
        case "D":
            ciudad = prompt("BARICHARA \n Escriba la opcion correspondiente al PLATO TÍPICO: \n A - Ternera rellena \n B - Sudado de pata \n C - Tamal santandereana");
            receta = ciudad == 'A' ? "https://www.mycolombianrecipes.com/capon-relleno-stuffed-beef/" :
                     ciudad == 'B' ? "https://cookpad.com/co/recetas/10688281-sudado-de-pata-santandereano" :
                     ciudad == 'C' ? "https://cookpad.com/co/recetas/10688281-sudado-de-pata-santandereano" : "";
            foodName = ciudad == 'A' ? "Ternera rellena" : ciudad == 'B' ? "Sudado de pata" : ciudad == 'C' ? "Tamal santandereana" : "";
            prompt(foodName , receta);
            break;
        default:
            break;
    }
}