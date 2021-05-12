import { registerUser } from "../firebase/firebaseAuth.js";

export function signUp() {
  const signUpHtml = `
  <div class="divSignUp">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logo" width="50%" height="50%">
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
      <input type="submit" value="resgistrarse">
    </form>

    <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
    </section>
  </div>`;

  const signUpView = document.createElement('section');
  signUpView.className = 'signUpClass';
  signUpView.innerHTML = signUpHtml;
  return signUpView;
}

export function signUpEvent(){
  const formRegister = document.getElementById("formSignUp");

  formRegister.addEventListener("submit", (event) => {
   
    const emailRegister = document.getElementById("emailRegister").value;
    const passwordRegister =
      document.getElementById("passwordRegister").value;
    event.preventDefault();
    registerUser( emailRegister, passwordRegister);
  });

}
