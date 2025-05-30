
const auth = firebase.auth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Cadastro realizado!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert("Erro ao cadastrar: " + error.message);
    });
}
