// Este es el punto de entrada de tu aplicacion

import { routing } from './router/router.js';


window.addEventListener("hashchange",() =>{
    routing(window.location.hash);
})
routing('#/');