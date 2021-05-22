// const auth = firebase.auth();

// Registro de usuariuo con metodo firebase CreateUserWithEmailAndPassword
export const registerUser = (email, password) => {
  const promesa = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    // eslint-disable-next-line arrow-body-style
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.assign('#/timeLine');
      console.log(user);
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

// Ingreso via Google con metodo firebase signInWithRedirect
export function googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then((result) => {
      // window.location.assign('#/timeLine');
      console.log(result);
      // console.log('google sign in');
    })
    .catch((error) => {
      console.log(error.message);
    });
}
// LogIn con metodo signInWithEmailAndPassword de firebase
export const loginUser = (email, password) => {
  const promesa = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.assign('#/timeLine');
      return user;
    })
    .catch((error) => {
      // eslint-disable-next-line no-unused-vars
      // const errorCode = error.code;
      const errorMessage = error.message;
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};
