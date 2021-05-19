// const auth = firebase.auth();

export const registerUser = (email, password) => {
  const promesa = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    // eslint-disable-next-line arrow-body-style
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      // eslint-disable-next-line no-unused-vars
      const errorCode = error.code;
      const errorMessage = error.message;
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
    .signInWithRedirect(provider)
    .then((result) => {
      console.log(result);
      console.log('google sign in');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// export const logInUser
