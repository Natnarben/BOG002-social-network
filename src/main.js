// Este es el punto de entrada de tu aplicacion

import { routing } from './router/router.js';
import { registerUser } from './firebase/firebaseAuth.js';

window.addEventListener('hashchange', () => {
  routing(window.location.hash);
});
routing('#/');

// console.log(firebase);

const formRegister = document.getElementById('formSignUp');

formRegister.addEventListener('submit', (event) => {
  const nameRegister = document.getElementById('nameRegister').value;
  const emailRegister = document.getElementById('emailRegister').value;
  const passwordRegister = document.getElementById('passwordRegister').value;
  event.preventDefault();
  registerUser(nameRegister, emailRegister, passwordRegister);
});
