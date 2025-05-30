
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login bem-sucedido!");
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
}
