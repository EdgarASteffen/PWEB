document.addEventListener("DOMContentLoaded", () => {

    const textoDigitado = document.getElementById("texto");
    const textoMaiusculo = document.getElementById("maiuscula");
    const textoMinusculo = document.getElementById("minuscula");

    textoMaiusculo.addEventListener('click', () => {
        textoDigitado.value = textoDigitado.value.toUpperCase();
        textoMinusculo.checked = false;
    });
    textoMinusculo.addEventListener('click', () => {
        textoDigitado.value = textoDigitado.value.toLowerCase();
        textoMaiusculo.checked = false;
    });
});