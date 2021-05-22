import { loginUser} from "../firebase/firebaseAuth.js";

export function logIn() {
  const htmlLogin = `
  <div  class="divLogIn">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logoMeowBox" width="20%" height="20%">
    <h2>¡Bienvenido de vuelta!</h2>
    <button > <img src="../src/images/google.png" alt="googleLogo"  "width="40px" height="40px"> Continuar con Google</button>
    <p>ó</p>
    <section id="sectionformlogIn">
        <form id="formLogIn" action="">
            <h3>Correo:</h3>
            <input id="emailLogin" type="text">
            <h3>Contraseña:</h3>
            <input id="passwordLogin" type="text">
            <br>
            <p class="loginError"></p>
            <br>
            <button type="submit"> Ingresar </button>
        </form>
    <h4>Aún no tienes cuenta?</h4> <p id="signIn"><a href="#/signUp">Registrate</a></p> 
    </section>
    </div>`;

  const loginView = document.createElement('section');
  loginView.innerHTML = htmlLogin;
  return loginView;
}

export function loginEvent() {
  const formLogin = document.getElementById("formSignUp");

  formLogin.addEventListener("submit", (event) => {
    const emailRegister = document.getElementById("emailLogin").value;
    const passwordRegister = document.getElementById("passwordLogin").value;
    event.preventDefault();

    loginUser (emailRegister, passwordRegister).then((result) => {
      if (result.error) {
        document.querySelector("loginError").innerHTML = result.message;
      }
    });
   console.log("SI FUNCIONO")
  });
}