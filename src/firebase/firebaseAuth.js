const auth = firebase.auth();
const db = firebase.firestore();
// Initialize Cloud Firestore through Firebase

export const registerUser = (email, password) => {
  const promesa = auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeLine');
      // Signed in
      // let user = userCredential.user;
      return userCredential;
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
      window.location.assign('#/timeLine');
      console.log(result);
      console.log('google sign in');
    })
    .catch((error) => {
      // const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line no-console
    console.log(error);
    // An error happened.
  });
}

export const savePublication = (publications) =>
  db.collection('publications').doc().set({
    publications,
  });

export const getPublication = () =>
  db.collection('publications').get();

export const onGetPublication = (callback) =>
  db.collection('publications').onSnapshot(callback);
