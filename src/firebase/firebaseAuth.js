export const auth = firebase.auth();
const db = firebase.firestore();
// Initialize Cloud Firestore through Firebase

export const registerUser = (email, password, name) => {
  const promesa = auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeLine');
      // Signed in
      const user = userCredential.user;
      return user.updateProfile({ displayName: name });
    })
    .catch((error) => {
      // let errorCode = error.code;
      const errorMessage = error.message;
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};

export const loginUser = (email, password) => {
  const promesa = auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeLine');
      const userAuthor = auth.currentUser;
      const name = userAuthor.displayName;
      // Signed in
      // let user = userCredential.user;
      return userCredential + name;
      // ...
    })
    .catch((error) => {
      // let errorCode = error.code;
      const errorMessage = error.message;
      // console.log('error 404!!!', error.message);
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};

export function googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const promesa = auth
    .signInWithPopup(provider)
    .then(() => {
      window.location.assign('#/timeLine');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
      return error;
    });
  return promesa;
}

export function profileSignOut() {
  auth.signOut().then(() => {
    window.location.assign('');
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
  });
}

// Creacion de collection publications con .add

export const savePublication= (descripcion) => {
  const userAuthor = auth.currentUser;
  const name = userAuthor.displayName;
  const uid = userAuthor.uid;
  
  // console.log(userAuthor);

  db.collection('publications').add({
    descripcion,
    name,
    date: Date.now(),
    uid,
  });
};

// obtener publicaciones//
export const onGetPublication = (callback) => {
  db.collection('publications').orderBy('date', 'desc').onSnapshot(callback);
};

// eliminar publicaciones
export const deletePublication = (id) => {
  db.collection('publications').doc(id).delete();
};

// Obtener id de publicaciones
export const getPublicationsId = (id) =>
  db.collection('publications').doc(id).get();

// editar publicacion
export const updatePost = (id, updatedPost) =>
  db.collection('publications').doc(id).update(updatedPost);

// se agrega campo de LIKES a la coleccion de publicaciones  
  export const updateLikes = (id, likes) => {
    const likes = [];
    db.collection('publications').doc(id).update({
    likes,
  });
};

// se obtiene los likes
export const getLikesPost = (doc) => 
  db.collection('likes').where('descripcion', '==', doc).get();


// Funcion eliminar likes
export const deleteLikes = (id) => {
  db.collection('likes').doc(id).delete();
};