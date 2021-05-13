// Este es el punto de entrada de tu aplicacion

import { routing } from './routings/router.js';

window.addEventListener('hashchange', () => {
  routing(window.location.hash);
});
routing(window.location.hash);

// console.log(firebase);
