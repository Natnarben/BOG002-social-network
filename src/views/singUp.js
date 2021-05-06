export function singUp (){
    const singUp = `
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="">
 <h2>Crea tu cuenta</h2>
 <button > <img src="../src/images/google.png" alt=""> Crear con Google</button>
 <p>ó</p>
 <section id="formSingUp">
  <form action="">
    <h3>Nombre:</h3>
    <input type="text">
    <h3>Correo:</h3>
    <input type="text">
    <h3>Contraseña:</h3>
    <input type="text">
    <input type="submit" value="resgistrarse">
  </form>

  <h4>Ya tienes cuenta?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
  
 </section>`;


const SingUpView = document.createElement("section");
SingUpView.innerHTML = singUp;
    return SingUpView;

}
