const db = firebase.firestore();
const auth = firebase.auth();

export const savePublication = (descripcion) => {
  const userAuthor = auth.currentUser;
  const name = userAuthor.displayName;
  db.collection('publications').add({
    descripcion, name,
  });
};

export const onGetPublication = (callback) => {
  db.collection('publications').onSnapshot(callback);
};
// export const getPublication = () => {
//   db.collection('publications').onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, ' => ', doc.data());
//       return doc.data();
//     });
//   });
// };
