const db = firebase.firestore();
const auth = firebase.auth();

export const savePublication = (descripcion) => {
  const userAuthor = auth.currentUser;
  const name = userAuthor.displayName;
  const uid = userAuthor.uid;
  const id = db;
  console.log(id);
  db.collection('publications').add({
    descripcion,
    name,
    date: Date.now(),
    uid,
  });
};

export const onGetPublication = (callback) => {
  db.collection('publications').orderBy('date', 'desc').onSnapshot(callback);
};

export const deletePublication = (id) => {
  db.collection('publications').doc(id).delete();
};

// export const getPublicationsId = (id) => {
//   db.collection('publications').doc(id).get();
// };

// const doc = getPublicationsId(event.target.dataset.id);
//   //    const postData = doc.data();
//       // postData.id = doc.id;
