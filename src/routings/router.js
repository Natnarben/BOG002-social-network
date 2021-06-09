import { landingPage } from '../views/landing.js';
import { signUp, signUpEvent, googleEvent } from '../views/signUp.js';
import { logIn, logInEvent, googleLogIn } from '../views/logIn.js';
import { timeLine, signOut, eventPost, printPublication } from '../views/timeLine.js';
import { profilePage } from '../views/profile.js';

const container = document.getElementById('root');

export const routing = (routes) => {
  container.innerHTML = '';
  // console.log(routes);
  switch (routes) {
    case '':
      container.appendChild(landingPage());
      break;
    case '#/signUp':
      container.appendChild(signUp());
      signUpEvent();
      googleEvent();
      break;
    case '#/logIn':
      container.appendChild(logIn());
      logInEvent();
      googleLogIn();
      break;
    case '#/timeLine':
      container.appendChild(timeLine());
      signOut();
      eventPost();
      printPublication();
      break;
    case '#/profile':
      container.appendChild(profilePage());
      break;
    default:
      console.log('error!');
  }
};
