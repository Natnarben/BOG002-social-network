import { landing } from "../views/landing.js";
import { signUp, signUpEvent } from "../views/signUp.js";
import { logIn } from "../views/logIn.js";


const container = document.getElementById("root");

export const routing = (routes) => {
  container.innerHTML = "";
  // console.log(routes);
  switch (routes) {
    case "":
      container.appendChild(landing());
      break;
    case "#/signUp":
      container.appendChild(signUp());
      signUpEvent();
    
      break;
    case "#/logIn":
      container.appendChild(logIn());
      break;
    default:
      console.log("error!");
  }
};
