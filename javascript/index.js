function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    alert("O formulário foi enviado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("assunto").value = "";
    document.getElementById("mensagem").value = "";

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); 
    validarFormulario();
});
