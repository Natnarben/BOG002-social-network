import{ landing } from "../views/landing.js";
import{ singUp } from "../views/singUp.js";


let container = document.getElementById("root");

export const routing = (routes) => {
    container.innerHTML = "";
    console.log(routes);
    switch(routes){
        case "#/":
            container.appendChild(landing());
            break;
        case "#/singUp":
            container.appendChild(singUp());
            break;
        case '#/timeline':
            return console.log('hola');
         default:
            console.log('error!');
    }
} 