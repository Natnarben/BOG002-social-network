export function landingPage() {
  const htmlLanding = `
    <div class="divLanding">
      <div class="landingClass">
        <img src="../src/images/meowBoxMarcaBlanca.png" alt="logo">
        <p>Personas con un gusto en común, los gatitos.</p>
        <img src="../src/images/meowBoxCabeza.png" alt="">
        <p>Haz parte de nuestra comunidad</p>
        <h2> Crea tu cuenta fácil y rápido<a href="#/signUp" style="color:#1dd3b0"> Aquí</a></h2>
        <p>ó</p>
        <h2>Ya tienes una cuenta?<a href= "#/logIn" style="color:#1dd3b0"><br>Ingresa con tu usuario</a></h2>
      </div>
    </div>`;

  const landingView = document.createElement('section');
  landingView.className = 'landingClass';
  landingView.innerHTML = htmlLanding;
  return landingView;
}
