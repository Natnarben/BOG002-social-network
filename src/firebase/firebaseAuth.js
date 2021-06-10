const auth = firebase.auth();

const db = firebase.firestore();

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
     
     .signInWithEmailAndPassword(email, password,)
     .then((userCredential) => {
      window.location.assign("#/timeLine");
       // Signed in
       // let user = userCredential.user;
       return userCredential;
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

      .then((result) => {
        window.location.assign("#/timeLine");
       
        // console.log(result);
        // console.log('google sign in');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        return error;
      });
      return promesa;
    }

    export function profileSignOut() {
      auth.signOut().then(() => {
        window.location.assign('');
        // Sign-out successful.
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        // An error happened.
      });
    }

    //FIRESTORE//

    export const savePublication = (descripcion) => {
      const userAuthor = auth.currentUser;
      const name = userAuthor.displayName;
     
    
      db.collection('publications').add({
        descripcion, 
        name, 
        date: Date.now(),
      });
    };
    

//obtener  publicaciones//

export const getPublication = () => 
  db.collection("publications").get();

export const onGetPublication = (callback) => 
db.collection("publications").orderBy("date", "desc").onSnapshot(callback);

// Eliminar publicaciones

export const deletePublication = id => db.collection("publications").doc(id).delete();

//boton Editar//

export const getPublicationsId= (id) =>
db.collection("publications").doc(id).get();

export const updatePost = (id, updatedPost)=>
db.collection("publications").doc(id).update(updatedPost);