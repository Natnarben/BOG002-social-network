// const auth = firebase.auth();

export const registerUser = (email, password) => {
  const promesa = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    // eslint-disable-next-line arrow-body-style
    .then((userCredential) => {
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
  firebase.auth()
    .signInWithPopUp(provider)
    .then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
}

export const logInUser = (email, password) => {
  const promesa = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};
