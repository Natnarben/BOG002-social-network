// const dataBase = firebase.firestore();

export function profilePage() {
  const htmlProfile = `
  <p> HOLA </p>`;

  const profileView = document.createElement('section');
  profileView.className = 'profileClass';
  profileView.innerHTML = htmlProfile;
  return profileView;
}
/*
const PublForm = document.getElementById('publications-form');
const savePublications = (nombre, descripción) => dataBase.collection('publications').doc().set({
  nombre,
  descripción,
});

PublForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const messagePublications = PublForm['text-description'].value;

  await savePublications(nombre.value, descripción.value);
  PublForm.reset();
  console.log(messagePublications);
}); */
