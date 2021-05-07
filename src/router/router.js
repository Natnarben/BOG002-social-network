import { landing } from '../views/landing.js';
import { singUp } from '../views/signUp.js';

const container = document.getElementById('root');

export const routing = (routes) => {
  container.innerHTML = '';
  switch (routes) {
    case '#/':
      container.appendChild(landing());
      break;
    case '#/singUp':
      container.appendChild(singUp());
      break;
    default:
      console.log('error');
  }
};
