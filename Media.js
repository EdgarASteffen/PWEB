var media = 0.0;

var nome = prompt("Informe o nome do aluno: ");

var nota1 = parseFloat(prompt("Informe a nota 1: "), 2);
var nota2 = parseFloat(prompt("Informe a nota 2: "), 2);
var nota3 = parseFloat(prompt("Informe a nota 3: "), 2);

media = (nota1 + nota2 + nota3) / 3;

alert("A média do aluno " + nome + " é = " + media.toFixed(2));