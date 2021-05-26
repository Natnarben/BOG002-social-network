// import { signOut } from '../firebase/firebaseAuth.js';

export function timeLine() {
  const htmlTimeLine = `
    <section class="navigationBar">
    <div >
        <img src="/src/images/MeowBoxMarcaMorada.png" alt=""   width="25%" >
    </div>
    <div class="dropdown-content">
        <a href="#/profile">Perfil</a>
        <a id="logOut" href="#/logIn">Cerrar Sesión</a>
    </div>
    <div class="dropdown">
        <h2 class="dropbtn"><img src="/src/images/perfil2.png" alt="navegación" width="40%"></h2>
        <div class="dropdown-content">
            <a href="#/profile">Perfil</a>
            <a id="logOut" href="#/logIn">Cerrar Sesión</a>
      </div>
    </div>
    </section>`;
  const timeLineView = document.createElement('section');
  timeLineView.innerHTML = htmlTimeLine;
  return timeLineView;
}
/*
export function signOutEvent() {
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', signOut());
}

  */
