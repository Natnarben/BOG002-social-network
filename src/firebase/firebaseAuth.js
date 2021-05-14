const auth = firebase.auth();

export const registerUser = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
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
      // formRegister.querySelector('.error').textContent = error.message;
    });
};

export function googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider)
    .then((result) => {
      console.log(result);
      console.log('google sign in');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// export const logInUser
