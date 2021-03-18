var n1 = parseFloat(prompt("Digite o n1: "));
var n2 = parseFloat(prompt("Digite o n2: "));

var somaValor = n1 + n2;
var subValor = n1 - n2;
var multValor = n1 * n2;

if (n2 == 0) {
    alert("Impossível dividir por 0");
} else {
    var divValor = n1 / n2;
    var restoValor = n1 % n2;
}

alert("Soma de n1 e n2: " + somaValor + "\n" +
    "Subtração de n1 e n2: " + subValor + "\n" +
    "Multiplicação de n1 e n2: " + multValor + "\n" +
    "Divisão de n1 e n2: " + divValor + "\n" +
    "Resto de n1 e n2: " + restoValor);