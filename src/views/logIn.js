export function logIn() {
  const htmlLogin = `
  <div class="divLogIn">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logoMeowBox" width="20%" height="20%">
    <h2>¡Bienvenido de vuelta!</h2>
    <button > <img src="../src/images/google.png" alt="googleLogo"  "width="40px" height="40px"> Continuar con Google</button>
    <p>ó</p>
    <section id="sectionformlogIn">
        <form id="formLogIn">
            <h3>Correo:</h3>
            <input type="email" id="emailLogIn">
            <h3>Contraseña:</h3>
            <input type="password" id="passwordLogIn">
            <br>
            <input type="submit" value="Ingresar">
        </form>
    <h4>Aún no tienes cuenta?</h4> <p id="signIn"><a href="#/signUp">Registrate</a></p> 
    </section>
    </div>`;

  const loginView = document.createElement('section');
  loginView.innerHTML = htmlLogin;
  return loginView;
}

// export function logInEvent() {
//   const formLogIn = document.getElementById('sectionformlogIn');
//   formLogIn.addEventListener('submit', (event) => {
//     const emailLogIn = document.getElementById('emailLogIn').value;
//     const passwordLogIn = document.getElementById('passwordLogIn').value;
//     event.preventDefault();
//     registerUser(emailRegister, passwordRegister);
//   });
// }
