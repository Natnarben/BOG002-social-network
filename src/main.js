// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {routing} from './router/router.js';

//myFunction();
window.addEventListener('hashchange', () => {
    routing(window.location.hash)
})