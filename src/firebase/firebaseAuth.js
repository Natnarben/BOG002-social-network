const auth = firebase.auth();

export const registerUser = (email, password, name) => {
  const promesa = auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeLine');
      // Signed in
      const user = userCredential.user;
      // user.displayName = name;
      console.log(name);
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

// auth.onAuthStateChanged((user) => {
//   console.log(user);
// });

export const loginUser = (email, password) => {
  const promesa = auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeLine');
      // Signed in
      const user = userCredential.user;
      console.log(user);
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

export function signOut() {
  auth.signOut().then(() => {
    window.location.assign('#/logIn');
    // Sign-out successful.
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    // An error happened.
  });
}
