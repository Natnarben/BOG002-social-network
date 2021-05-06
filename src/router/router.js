import{landing} from "./views/landing.js";
import{singUp} from "./views/singUp.js";


let container = document.getElementById("root");

export const routing = (routes) => {
    container.innerHTML = "";
    switch(routes){
        case "#/":
            container.appendChild(landing());
            break;
        case "#/singUp":
            container.innerHTML = singUp ();
            break;

    }
} 