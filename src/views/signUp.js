import { registerUser, googleAuth } from '../firebase/firebaseAuth.js';

export function signUp() {
  const signUpHtml = `
  <div class="divSignUp">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logo" width="20%" height="20%">
    <h2>Crea tu cuenta</h2>
    <button id="googleLogIn"> <img src="../src/images/google.png" alt="googlelogo "width="40px" height="40px"> Crear con Google</button>
    <p>ó</p>
    <section id="sectionFormSignUp">
    <form id="formSignUp">
      <h3>Correo:</h3>
      <input type="text" id="emailRegister" required>
      <h3>Contraseña:</h3>
      <input type="password" id="passwordRegister" required>
      <p class="error"></p>
      <br>
      <input type="submit" value="Registrarse">
    </form>

    <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
    </section>
  </div>`;

  const signUpView = document.createElement('section');
  signUpView.className = 'signUpClass';
  signUpView.innerHTML = signUpHtml;
  return signUpView;
}

export function signUpEvent() {
  const formRegister = document.getElementById('formSignUp');
  formRegister.addEventListener('submit', (event) => {
    const emailRegister = document.getElementById('emailRegister').value;
    const passwordRegister = document.getElementById('passwordRegister').value;
    event.preventDefault();
    registerUser(emailRegister, passwordRegister);
  });

  const googleRegister = document.getElementById('googleLogIn');
  googleRegister.addEventListener('click', (event) => {
    event.preventDefault();
    googleAuth();
    formRegister.reset();
  });
}
