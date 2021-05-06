function validarDados() {

    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
        return false;
    }

    if (document.forms.formulario1.elements.idMensagem.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }

    if (!(document.forms["formulario1"].elements["sim"].checked || document.forms["formulario1"].elements["nao"].checked)) {
        alert("É necessário responder a pesquisa");
        return false;
    }

    alert(document.forms["formulario1"].elements["nao"].checked ? "Que bom que você voltou a visita a página!" : "Volte sempre a esta página!");

    return true;
}