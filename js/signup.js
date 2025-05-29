
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpf = document.getElementById('cpf').value;
    localStorage.setItem('user', JSON.stringify({ name, email, password, cpf }));
    window.location.href = "login.html";
});
