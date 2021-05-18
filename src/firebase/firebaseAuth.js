const auth = firebase.auth();

export const registerUser = (email, password) => {
 const promesa = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password,)
    .then((userCredential) => {
      // Signed in
      // let user = userCredential.user;
      return userCredential;
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
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
    auth.signInWithRedirect(provider)
      .then((result) => {
        console.log(result);
        console.log('google sign in');
      })
      .catch((error) => {
        console.log(error.message);
      });
    }