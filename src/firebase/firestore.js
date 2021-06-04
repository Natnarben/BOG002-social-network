const db = firebase.firestore();

export const savePublication = (descripcion) => {
  db.collection('publications').doc().set({
    descripcion,
  });
};

export const getPublication = () => {
  db.collection('publications').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  });
};
