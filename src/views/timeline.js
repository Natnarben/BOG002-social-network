import {
  profileSignOut, savePublication, onGetPublication,
  deletePublication, likesPost, getLikesPost, deleteLikes,
} from '../firebase/firebaseAuth.js';

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
        <input id="inputPost" class="inputPost" type="text" placeholder="¿Qué te gustaría compartir hoy?" autofocus>
        <div>
        <br>
          <button type="submit" id="btnPost" class="btnPost">Publicar</button>
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
    console.log('realizado');
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

export function eventPost() {
  const postButton = document.getElementById('btnPost');
  // let editStatus = false;
  // let id = '';
  postButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const publications = document.getElementById('inputPost');
    // if (!editStatus) {
    await savePublication(publications.value);
  });
}
// else {
      // await updatePost(id, {
       // descripcion: publications.value,
      // });

      // editStatus = false;
      // id = '';
      // postButton['.btnPost'].innerHTML = 'Publicar';
    // }
  // });
  // const btnEdit = document.querySelectorAll('.btn-edit');
  // btnEdit.forEach((btn) => {
  //  btn.addEventListener('click', async (event) => {
  //    const doc = await getPublicationsId(event.target.dataset.id);
  //    const postData = doc.data();
      // postData.id = doc.id;

  //    editStatus = true;
  //    id = doc.id;

  //    postButton['.inputPost'].value = postData.descripcion;
  //    postButton['.btnPost'].innerHTML = 'Guardar';
  //  });
  //});

// funcion para imprimir en pantalla lo obtenido de FIREBASE
export function printPublication() {
  const containerPublication = document.getElementById('containerPublication');
  onGetPublication((querySnapshot) => {
    containerPublication.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      postData.id = doc.id;
      containerPublication.innerHTML += `
      <div class="each-publication">
        <p id="user-name">${postData.name}</p>
        <p class="descripcion-space">
          ${postData.descripcion}
          <div class="actions-space">
            <button type="button" class="btn-delete" data-id="${postData.id}">Eliminar</button>
            <button type="button" class="btn-edit" data-id="${postData.id}">Editar</button> 
          </div>
          <div id="containerLikes">
          <span class="likesCounter" id="likePost${doc.id}">0</span>
          <button type="button" class="btnLikes" id="btnLikes${doc.id}" data-id="${doc.id}" title="Dar Like">LIKE
          </button>
          <button type="button" class="btnLikes" id="btnDisLikes${doc.id}" data-id="${doc.id}" title="Dar DisLike">DISLIKE
          </button>
        </div>  
        </p>
      </div>`;
      const btnDelete = document.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          await deletePublication(event.target.dataset.id);
        });
      });
    });

    /* const botonLikes = document.querySelectorAll('.likes');
    botonLikes.forEach(async (element) => {
      // const doc = await getPublicationsId(element.target.dataset.id);
      // const postData = doc.data();
      // postData.id = doc.id;
      element.addEventListener('click', countingLikes);
    }); */
  });
}
// <button type="button" class="likes" id="likes"><p>
// <span id="showLikes"></span> Me gusta</p></button>
export function getLikes(idPost) {
  const datalikes = [];
  let likes = 0;
  let userActualLikes = false;
  const btnDisLikes = document.getElementById(`btnDisLikes${idPost}`);
  const btnLikes = document.getElementById(`btnLikes${idPost}`);
  getLikesPost(idPost)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        datalikes.push(doc.data());
        // si el usuario actual ya dio like, activamos variable de control
        if (doc.data().Uid === auth.currentUser.uid) {
          userActualLikes = true;
          // agregar click del btn disLike
          btnDisLikes.addEventListener('click', () => {
            deleteLikes(doc.id);
            getLikes(idPost);
          });
        }
      });
      // validamos si el usuario actual dio like para mostrar btn disLike
      if (userActualLikes) {
        btnLikes.style.display = 'none';
        btnDisLikes.style.display = 'block';
      } else {
        // else mostrar btn like
        btnLikes.style.display = 'block';
        btnDisLikes.style.display = 'none';
      }
      likes = datalikes.length;
      // si no tienes likes es porque apenas lo se esta publicando, mostar btnLike
      if (likes === 0) {
        btnLikes.style.display = 'block';
      }
      const likePost = document.getElementById(`likePost${idPost}`);
      likePost.innerHTML = likes;
    });
}

export function newCollectionLikes(idPost) {
  const btnLikes = document.getElementById(`btnLikes${idPost}`);
  const btnDisLikes = document.getElementById(`btnDisLikes${idPost}`);
  btnLikes.addEventListener('click', () => {
    const user = auth.currentUser;
    const postID = btnLikes.dataset.id;
    const userID = user.uid;
    likesPost(postID, userID);
    getLikes(postID);
    btnLikes.style.display = 'none';
    btnDisLikes.style.display = 'block';
  });
}
