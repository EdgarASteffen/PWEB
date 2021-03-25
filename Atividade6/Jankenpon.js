var pessoa = prompt("Vamos jogar Jankenpon?" + "\n" + "Escolha: PEDRA, PAPEL ou TESOURA?").toUpperCase();
var computador = Math.random();

if (computador < 0.33) {
    computador = "PEDRA";
} else if (computador <= 0.66) {
    computador = "PAPEL";
} else {
    computador = "TESOURA";
}

var comparar = function (escolhaPessoa, escolhaComputador) {
    if (escolhaPessoa === escolhaComputador) {
        return "Empate!";
    }

    if (escolhaPessoa === "PEDRA") {
        if (escolhaComputador === "TESOURA") {
            return "Você venceu! PEDRA quebra TESOURA";
        } else {
            return "PC venceu! PAPEL cobre PEDRA";
        }
    }

    if (escolhaPessoa === "PAPEL") {
        if (escolhaComputador === "PEDRA") {
            return "Você venceu! PAPEL cobre PEDRA";
        } else {
            return "PC venceu! TESOURA corta PAPEL";
        }
    }

    if (escolhaPessoa === "TESOURA") {
        if (escolhaComputador === "PAPEL") {
            return "Você venceu! TESOURA corta PAPEL";
        } else {
            return "PC venceu! PEDRA quebra TESOURA";
        }
    }
}

var ganhou = comparar(pessoa, computador);

document.write("<p>Você escolheu: " + pessoa + "</p>");
document.write("<p>Computador escolheu: " + computador + "</p>");

document.write("<br>" + ganhou);