import { signOut } from '../firebase/firebaseAuth.js';
import { savePublication } from '../firebase/firestore.js';

export function timeLine() {
  const htmlTimeLine = `
    <section class="navigationBar">
    <div >
        <img src="/images/MeowBoxMarcaMorada.png" alt=""   width="25%" >
    </div>
    <div class="dropdown">
        <h2 class="dropbtn"><img src="/images/perfil2.png" alt="navegación" width="40%"></h2>
        <div class="dropdown-content">
            <a href="#/profile">Perfil</a>
            <a id="logOut" href="#/logIn">Cerrar Sesión</a>
      </div>
    </div>
    </section>
    <section>
    <form id="formPost">
      <div>
        <textarea name="" id="inputPost" rows="3" placeholder="¿Qué te gustaría compartir hoy?"></textarea>
      </div>
      <div>  
        <button type="submit" id="btnPost">Compartir</button>
      </div>
      <div id="containerPublication"></div>
    </form>
    </section>
    `;
  const timeLineView = document.createElement('section');
  timeLineView.innerHTML = htmlTimeLine;
  return timeLineView;
}

export function signOutEvent() {
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });
}

export function eventPost() {
  const postButton = document.getElementById('formPost');
  postButton.addEventListener('submit', async (event) => {
    event.preventDefault();
    const publications = document.getElementById('inputPost');
    await savePublication(publications.value);
    postButton.reset();
  });
}

// funcion para pintarPublicación y llamo router
// onsnapshot -> cambios en tiempo real
// plataformas gratis
// separar funciones
