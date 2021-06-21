import { signOut } from '../firebase/firebaseAuth.js';
import {
  savePublication, onGetPublication, deletePublication, getPublicationsId, updatePost, saveLike,
} from '../firebase/firestore.js';

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

let editStatus = false;
let id = '';
export function eventPost() {
  const postButton = document.getElementById('btnPost');
  const formPost = document.getElementById('formPost');
  postButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const publications = document.getElementById('inputPost');
    if (!editStatus) {
      await savePublication(publications.value);
    } else {
      await updatePost(id, {
        descripcion: publications.value,
      });
      editStatus = false;
      id = '';
      // eslint-disable-next-line dot-notation
      formPost['btnPost'].innerHTML = 'Publicar';
    }
    formPost.reset();
  });
}

function eventDelete() {
  const btnDeletes = document.querySelectorAll('.btn-delete');
  btnDeletes.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      await deletePublication(e.target.dataset.id);
    });
  });
}

function eventEdit() {
  const btnEdits = document.querySelectorAll('.btn-edit');
  btnEdits.forEach((btn) => {
    const formPost = document.getElementById('formPost');
    btn.addEventListener('click', async (e) => {
      const edit = await getPublicationsId(e.target.dataset.id);
      const post = edit.data();
      console.log(edit);
      editStatus = true;
      id = edit.id;
      // eslint-disable-next-line dot-notation
      formPost['inputPost'].value = post.descripcion;
      // eslint-disable-next-line dot-notation
      formPost['btnPost'].innerHTML = 'Guardar';
    });
  });
}

function likesEvent() {
  const buttonLikes = document.querySelectorAll('.btnLikes');
  buttonLikes.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const infoPublication = await getPublicationsId(e.target.dataset.id);
      const infoPost = infoPublication.data();
      console.log(infoPublication, infoPost);
    });
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
      postData.id = doc.id;
      let btnDelete = '';
      let btnEdit = '';
      // console.log(postData);

      if (postId === userUid) {
        btnDelete = `<button type="button" class="btn-delete" data-id="${postData.id}">Eliminar</button>`;
        btnEdit = `<button type="button" class="btn-edit" data-id="${postData.id}">Editar</button>`;
      }

      containerPublication.innerHTML += `
      <div class="each-publication">
        <p id="user-name">${postData.name}</p>
        <p class="descripcion-space">${postData.descripcion}</p>
        <div class="actions-space">
          <button class="btnLikes" id="likes"><p><span id="showLikes"></span> Me gusta</p></button>
          <p id="likesCounter">0</p>
          ${btnDelete}
          ${btnEdit}
          </div>  
      </div>`;
      return containerPublication;
    });
    eventDelete();
    eventEdit();
    likesEvent();
  });
}

// plataformas gratis
// separar funciones
