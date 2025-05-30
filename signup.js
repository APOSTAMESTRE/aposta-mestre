function signup() {
  const fullName = document.getElementById("fullname").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return firebase.firestore().collection("users").doc(user.uid).set({
        fullName,
        cpf,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Erro no cadastro: " + error.message);
    });
}
