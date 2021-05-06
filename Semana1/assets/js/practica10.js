// ciclo for
let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () => {
    for(let i = 0; i < 5; i++) {
        window.open("https://www.wikipedia.org/");
    }
}

btnPrueba.addEventListener("click", function (ev) {
    spamLink();
})