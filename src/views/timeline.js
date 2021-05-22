// import {  } from '../firebase/firebaseAuth.js';

export function timeLine() {
  const htmlTimeLine = `
  <section class="timelineSection">
  <header class="header">
    <span>Logo</span>
    <span>Perfil</span>
    <span class="logOut" href="#/logIn">Cerrar Sesión</span>      
  </header>
    <div class="publications"></div>
    </section>`;

  const timeLineView = document.createElement('section');
  timeLineView.innerHTML = htmlTimeLine;
  return timeLineView;
}
