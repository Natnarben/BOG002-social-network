export const registerUser = (name, email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(name, email, password)
    .then((userCredential) => {
    // Signed in
    // let user = userCredential.user;
      console.log(userCredential.user);
    // ...
    })
    .catch((error) => {
      // let errorCode = error.code;
      // let errorMessage = error.message;
      console.log('error 404!!!', error.message);
    });
};
