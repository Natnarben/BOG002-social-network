import { signOut } from '../firebase/firebaseAuth.js';
import { savePublication, onGetPublication, deletePublication } from '../firebase/firestore.js';

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
      </form>
    </section>
    <section id="containerPublication"></section>
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

export function printPublication() {
  const containerPublication = document.getElementById('containerPublication');
  onGetPublication((querySnapshot) => {
    containerPublication.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      postData.id = doc.id;

      containerPublication.innerHTML += `
      <div>
        <p id='user-name'>${postData.name}</p>
        <div>
        ${postData.descripcion}
        <div>
          <button type="button" class="btn-delete" data-id="${postData.id}">Eliminar</button>
          <button type="button" class="btn-edit" data-id="${postData.id}">Editar</button>
        </div>
      </div>
      </div>`;
      return containerPublication;
    });
  });
}

export function deletePost() {
  const btnDelete = document.querySelectorAll('.btn-delete');
  console.log(btnDelete);
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      console.log('Hola estoy funcionando', event);
      // await deletePublication(event.target.dataset.id); async
    });
  });
}
// funcion para pintarPublicación y llamo router
// plataformas gratis
// separar funciones
