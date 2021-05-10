export function signUp() {
  const signUpHtml = `
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="">
 <h2>Crea tu cuenta</h2>
 <button > <img src="../src/images/google.png" alt=""> Crear con Google</button>
 <p>ó</p>
 <section id="sectionformSignUp">
  <form action="" id="formSignUp">
    <label for="nameRegister">Nombre:</label>
    <input type="text">
    <label for="emailRegister">Correo:</label>
    <input type="text" id="emailRegister">
    <label for="passwordRegister">Contraseña:</label>
    <input type="text" id="passwordRegister">
    <input type="submit" value="resgistrarse">
  </form>
  <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
 </section>`;

  const SignUpView = document.createElement('section');
  SignUpView.innerHTML = signUpHtml;
  return SignUpView;
}
