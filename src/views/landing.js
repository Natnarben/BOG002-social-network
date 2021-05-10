export function landing() {
  const htmlLanding = `
    <div class="divLanding">
      <img src="../src/images/meowBoxMarcaBlanca.png" alt="logo">
      <p>Personas con un gusto en común, los gatitos.</p>
      <img src="../src/images/meowBoxCabeza.png" alt="">
      <p>Haz parte de nuestra comunidad</p>
      <h2> <a href="#/signUp" style="color:#ffffff">Crea tu cuenta fácil y rapido</a></h2>
      <p>ó</p>
      <h2><a href= "#/logIn" style="color:#ffffff">Ingresa con tu usuario</a></h2>
    </div>`;

  const landingView = document.createElement('section');
  landingView.className = 'landingClass';
  landingView.innerHTML = htmlLanding;
  return landingView;
}
