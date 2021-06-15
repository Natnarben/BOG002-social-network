export function profilePage() {
  const htmlProfile = `
  <p> HOLA </p>`;

  const profileView = document.createElement('section');
  profileView.className = 'profileClass';
  profileView.innerHTML = htmlProfile;
  return profileView;
}
