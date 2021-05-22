import { landingPage } from '../views/landing.js';
import { signUp, signUpEvent } from '../views/signUp.js';
import { logIn, logInEvent } from '../views/logIn.js';
import { timeLine } from '../views/timeline.js';

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
      // googleEvent();
      break;
    case '#/logIn':
      container.appendChild(logIn());
      logInEvent();
      // googleEvent();
      break;
    case '#/timeLine':
      container.appendChild(timeLine());
      // logInEvent();
      break;
    default:
      console.log('error!');
  }
};
