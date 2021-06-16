import {
  profileSignOut, savePublication, onGetPublication, deletePublication, getPublicationsId,
  updatePost,
} from '../firebase/firebaseAuth.js';

const auth = firebase.auth();

export function timeLine() {
  const htmlTimeLine = `
    <nav class="navigationBar">
      <div>
        <img src="../src/images/MeowBoxMarcaMorada.png" alt="" width="20%" href="#/timeLine">
      </div>
      <div class="dropdown">
        <h2 class="dropbtn"><img src="../src/images/Perfil2.png" width="25%" class="icon-profile"></h2>
        <div class="dropdown-content">
          <a href="#/profile">Perfil</a>
          <a href="" id ="logOut">Cerrar Sesión</a> 
        </div>
      </div> 
    </nav>
    <form id="formPost" class="formPost">
      <div>
      <input id="input-Post" class="input-Post" type="text" placeholder="¿Qué te gustaría compartir hoy?" autofocus required>

        <div>
        <br>
          <button type="submit" id="btn-Post" class="btnPost">Publicar</button>
        </div>
      </div>      
    </form>
    <section id="containerPublication">
    </section>
    `;
  const timeLineView = document.createElement('section');
  timeLineView.innerHTML = htmlTimeLine;
  timeLineView.className = 'timeLineSection';
  return timeLineView;
}
// funcion para cerrar Sesion
export function signOut() {
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', (event) => {
    event.preventDefault();
    profileSignOut();
  });
}
// funcion para deslizar hacia abajo menu Perfil y cerrar sesion
export function dropdownMenu() {
  const buttonMenu = document.getElementById('btn');
  buttonMenu.addEventListener('click', () => {
  });
}

// Funcion para GUARDAR descripcion en FIREBASE

let editStatus = false;
let id = '';

export function eventPost() {
  const postButton = document.getElementById('btn-Post');
  const formPost = document.getElementById('formPost');

  postButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const publications = document.getElementById('input-Post');
    if (!editStatus) {
      await savePublication(publications.value);
    } else {
      await updatePost(id, {
        descripcion: publications.value,
      });

      editStatus = false;
      id = '';
      formPost['btn-Post'].innerHTML = 'Publicar';
    }
    formPost.reset();
    publications.focus();
  });
}

// funcion para imprimir en pantalla lo obtenido de FIREBASE
function eventDelete() {
  const btnDeletes = document.querySelectorAll('.btn-delete');
  btnDeletes.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      await deletePublication(e.target.dataset.id);
    });
  });
}
function eventEdit() {
  const btnEdit = document.querySelectorAll('.btn-edit');
  btnEdit.forEach((btn) => {
    const formPost = document.getElementById('formPost');
    btn.addEventListener('click', async (e) => {
      const editar = await getPublicationsId(e.target.dataset.id);
      const post = editar.data();
      console.log(post);
      editStatus = true;
      id = editar.id;
      formPost['input-Post'].value = post.descripcion;
      formPost['btn-Post'].innerHTML = 'Guardar';
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
      // console.log (postData);
      let btnDelete = '';
      let btnEdit = '';

      if (postId === userUid) {
        btnDelete = `<button type="button" class="btn-delete" id= 'btn-delete' data-id="${postData.id}">Eliminar</button>`;
        btnEdit = `<button type="button" class="btn-edit" data-id="${postData.id}">Editar</button>`;
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
    });

    eventDelete();
    eventEdit();
  });
}
