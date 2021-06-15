import { signOut } from '../firebase/firebaseAuth.js';
import { savePublication, onGetPublication, deletePublication } from '../firebase/firestore.js';

const auth = firebase.auth();

export function timeLine() {
  const htmlTimeLine = `
  <nav class="navigationBar">
    <div>
      <img src="../src/images/MeowBoxMarcaMorada.png" alt="" width="20%" href="#/timeLine">
    </div>
    <div class="dropdown">
      <h2 class="dropbtn"><img src="../src/images/Perfil3.png" width="25%" class="icon-profile"></h2>
      <div class="dropdown-content">
        <a href="#/profile">Perfil</a>
        <a href="" id ="logOut">Cerrar Sesión</a> 
      </div>
    </div> 
  </nav>
  <form id="formPost" class="formPost">
    <div>
      <input id="inputPost" class="inputPost" type="text" placeholder="¿Qué te gustaría compartir hoy?" autofocus required>
      <div>
        <br>
        <button type="submit" id="btnPost" class="btnPost">Publicar</button>
      </div>
    </div>      
  </form>
  <section id="containerPublication">
  </section>`;
  const timeLineView = document.createElement('section');
  timeLineView.innerHTML = htmlTimeLine;
  timeLineView.className = 'timeLineSection';
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
      const postId = postData.uid;
      const userUid = auth.currentUser.uid;
      const id = postData.id;
      let btnDelete = '';
      let btnEdit = '';
      // console.log(postData);

      if (postId === userUid) {
        btnDelete = `<button type="button" class="btn-delete" data-id="${postData.uid}">Eliminar</button>`;
        btnEdit = `<button type="button" class="btn-edit" data-id="${postData.uid}">Editar</button>`;
      }

      containerPublication.innerHTML += `
      <div class="each-publication">
        <p id="user-name">${postData.name}</p>
        <p class="descripcion-space">${postData.descripcion}</p>
        <div class="actions-space">
          <button class="likes" id="likes"><p><span id="showLikes"></span> Me gusta</p></button>
          ${btnDelete}
          ${btnEdit}
          </div>  
      </div>`;
      return containerPublication;
    });
  });
}

export function deletePost() {
  const btnDelete = document.getElementsByClassName('btn-delete');
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
