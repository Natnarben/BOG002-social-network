import{ landing } from "../views/landing.js";
import{ singUp } from "../views/singUp.js";
import {logIn} from "../views/logIn.js";


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
        case '#/logIn':
            container.appendChild(logIn());
            break;
         default:
            console.log('error!');
    }
} 