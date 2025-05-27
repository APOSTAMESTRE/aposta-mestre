
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const cpf = document.getElementById("cpf").value;

  if (nome && email && senha && cpf) {
    localStorage.setItem("usuarioNome", nome);
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("usuarioNome").textContent = nome;
    document.getElementById("mensagemBoasVindas").classList.remove("hidden");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
