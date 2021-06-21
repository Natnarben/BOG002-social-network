import {
    auth, profileSignOut, savePublication, onGetPublication, deletePublication, getPublicationsId, updatePost
} from '../firebase/firebaseAuth.js';

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
            <input id="inputPost" class="inputPost" type="text" placeholder="¿Qué te gustaría compartir hoy?">
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
    const postButton = document.getElementById('btnPost');
    const formPost = document.getElementById('formPost');

    postButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const publications = document.getElementById('inputPost');
        if (!editStatus) {
            await savePublication(publications.value);
        }   else {
            await updatePost(id, {
                descripcion: publications.value,
            });
            editStatus = false;
            id = '';
            formPost['btnPost'].innerHTML = 'Publicar';
        }
        formPost.reset();
        publications.focus();
    });
}


// funcion para elimimar publicacion con evento click
export function deleteEvent() {
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
            editStatus = true;
            id = editar.id;
            formPost['inputPost'].value = post.descripcion;
            formPost['btnPost'].innerHTML = 'Guardar';
        });
    });
}



function eventLikes() {
    let contador = 0;
    const botonLikes = document.querySelectorAll('.btnLikes');
    botonLikes.forEach(async (element) => {
    //    const btnClass = e.target.classList.contains("active");
    //    const idp = e.target.dataset.id;
    //    const user = firebase.auth().currentUser;
    //    const idUser = user.uid;
    // const doc = await getPublicationsId(element.target.dataset.id);
    // console.log(doc);
    // const postData = doc.data();
    // postData.id = doc.id;
    element.addEventListener('click', countingLikes);
    });
    function countingLikes() {
        contador += 1 ;
        let sumatoriaClicks = document.getElementById('likePost');
        sumatoriaClicks.innerHTML = contador; 
    }
}

// funcion para imprimir en pantalla la descripcion obtenida de FIREBASE
export function printPublication() {
    const containerPublication = document.getElementById('containerPublication');
    onGetPublication((querySnapshot) => {
        containerPublication.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const postData = doc.data();
            const postId = postData.uid;
            const userUid = auth.currentUser.uid;
            postData.id = doc.id;
            // console.log(postId, postData.id);
            // console.log (postData);
            let btnDelete = '';
            let btnEdit = '';

            if (postId === userUid) {
            btnDelete = `<button type="button" class="btn-delete" id='btn-delete' data-id="${postData.id}">Eliminar</button>`;
            btnEdit = `<button type="button" class="btn-edit" data-id="${postData.id}">Editar</button>`;
            }

            containerPublication.innerHTML += `
            <div class="each-publication">
                <p id="user-name">${postData.name}</p>
                <p class="descripcion-space">${postData.descripcion}</p>
                <div class="actions-space">
                    ${btnDelete}
                    ${btnEdit}
                </div> 
                <div id="containerLikes">
                    <span class="likesCounter" id="likePost">0</span>
                    <button type="button" class="btnLikes" id="btnLikes" data-id="${postData.id}" title="Dar Like">LIKE
                    </button>
                    <button type="button" class="btnDisLikes" id="btnDisLikes" data-id="${postData.id}" title="Dar DisLike">DISLIKE
                    </button>
                </div> 
            </div>`;
        });
    deleteEvent();
    eventEdit();
    eventLikes();
    });
}   
/*

function getLikes(idPost) {
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
                    getLikesPost(idPost);
                });
            }
        });
        // validamos si el usuario actual dio like para mostrar btn disLike
        if (userActualLikes) {
            btnLikes.style.display = 'none';
            btnDisLikes.style.display = 'block';
        } else {
          // de lo contrario mostrar btn like
            btnLikes.style.display = 'block';
            btnDisLikes.style.display = 'none';
        }
        likes = datalikes.length;
        // si no tienes likes es porque apenas lo se esta publicando, mostar btnLike
        if (likes === 0) {
            btnLikes.style.display = 'block';
        }
        const likePost = document.getElementById(`likePost${postId}`);
        likePost.innerHTML = likes;
    });
}

export function newCollectionLikes(idPost) {
    const btnLikes = document.getElementById(`btnLikes${postId}`);
    const btnDisLikes = document.getElementById(`btnDisLikes${postId}`);
    btnLikes.addEventListener('click', () => {
        const user = auth.currentUser;
        const postID = btnLikes.dataset.id;
        const userID = user.uid;
        likesPost(postID, userID);
        getLikesPost(postID);
        btnLikes.style.display = 'none';
        btnDisLikes.style.display = 'block';
    });
}  
*/


