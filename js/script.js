function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    if (!nome || !email || !senha || !cpf) {
        alert('Preencha todos os campos.');
        return;
    }

    localStorage.setItem('usuario', JSON.stringify({ nome, email, senha, cpf }));
    alert('Cadastro realizado com sucesso! Faça login.');
    window.location.href = 'login.html';
}

function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        window.location.href = 'boasvindas.html';
    } else {
        alert('E-mail ou senha inválidos.');
    }
}