import { landing } from "../views/landing.js";
import { signUp, signUpEvent, googleRegister } from "../views/signUp.js";
import { logIn, loginEvent,  googleLogIn } from "../views/logIn.js";
import { timeLine, signOut, eventPost  } from "../views/timeLine.js";
import {  profilePage  } from "../views/profile.js";

const container = document.getElementById("root");

export const routing = (routes) => {
  container.innerHTML = "";
  // console.log(routes);
  switch (routes) {
    case '':
      container.appendChild(landing());
      break;
    case "#/signUp":
      container.appendChild(signUp());
      signUpEvent();
      googleRegister();
    break;

    case "#/logIn":
      container.appendChild(logIn());
      loginEvent();
      googleLogIn();
    break;

    case "#/timeLine":  
    container.appendChild(timeLine());
    signOut()
    eventPost()
    break;

    case "#/profile":  
      container.appendChild( profilePage());
        break;
    default:
      console.log("error!");
  }
};


