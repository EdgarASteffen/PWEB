var x = parseFloat(prompt("Informe o primeiro número"));
var y = parseFloat(prompt("Informe o segundo número"));
var z = parseFloat(prompt("Informe o terceiro número"));

if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Entrada inválida!");
    location.reload();
}

else {
    function maiorNumero(x, y, z) {
        if (x > y && x > z) {
            alert("O maior número é " + x);
        }

        else if (y > x && y > z) {
            alert("O maior número é " + y);
        }

        else {
            alert("O maior número é " + z);
        }
    }

    maiorNumero(x, y, z);
}