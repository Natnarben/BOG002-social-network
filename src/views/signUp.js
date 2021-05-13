// import { registerUser } from "../firebase/firebaseAuth.js";

export function signUp() {
  const signUpHtml = `
  <div class="divSignUp">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logo" width="20%" height="20%">
    <h2>Crea tu cuenta</h2>
    <button > <img src="../src/images/google.png" alt="googlelogo "width="40px" height="40px"> Crear con Google</button>
    <p>ó</p>
    <section id="sectionFormSignUp">
    <form id="formSignUp">
     
      <h3>Correo:</h3>
      <input type="text" id="emailRegister">
      <h3>Contraseña:</h3>
      <input type="text" id="passwordRegister">
      <br>
      <p class="error"></p>
      <br>
      <input type="submit" value="Registrarse">
    </form>

    <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
    </section>
  </div>`;

  const signUpView = document.createElement("section");
  signUpView.className = "signUpClass";
  signUpView.innerHTML = signUpHtml;
  return signUpView;
}

export function signUpEvent() {
  const formRegister = document.getElementById("formSignUp");

  formRegister.addEventListener("submit", (event) => {
    const emailRegister = document.getElementById("emailRegister").value;
    const passwordRegister = document.getElementById("passwordRegister").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailRegister, passwordRegister)
      .then((userCredential) => {
        // Signed in
        // let user = userCredential.user;
        console.log(userCredential.user);
        formRegister.reset();
       
        // ...
      })
      .catch((error) => {
        formRegister.querySelector(".error").textContent = error.message;
      });
    // event.preventDefault();
    // registerUser(emailRegister, passwordRegister);
  
  });
}
