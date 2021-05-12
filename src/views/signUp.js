export function signUp() {
  const signUpHtml = `
  <div class="divSignUp">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logo" width="50%" height="50%">
    <h2>Crea tu cuenta</h2>
    <button > <img src="../src/images/google.png" alt="googlelogo"width="5%" height="5%"> Crear con Google</button>
    <p>ó</p>
    <section id="sectionFormSignUp">
    <form id="formSignUp">
      <h3>Nombre:</h3>
      <input type="text" id="nameRegister">
      <h3>Correo:</h3>
      <input type="text" id="emailRegister">
      <h3>Contraseña:</h3>
      <input type="text" id="passwordRegister>
      <button>hola!</button>
    </form>

    <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
    </section>
  </div>`;

  const signUpView = document.createElement('section');
  signUpView.className = 'signUpClass';
  signUpView.innerHTML = signUpHtml;
  return signUpView;
}
