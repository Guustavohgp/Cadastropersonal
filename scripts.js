function validarFormulario() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mensagem = document.getElementById("mensagem");

    if (password !== confirmPassword) {
        mensagem.textContent = "As senhas não coincidem!";
        return false;
    }

    if (password.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        return false;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    return true;
}