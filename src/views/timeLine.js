import {profileSignOut } from "../firebase/firebaseAuth.js"


export function timeLine() {
    const htmlTimeLine = `
      <section class="navigationBar">
      <div><img src="../src/images/MeowBoxMarcaMorada.png" alt="" width="25%"></div>
  
      
      <div class="dropdown">
        <h2 class="dropbtn"><img src="../src/images/Perfil2.png" width="25%"></h2>
        <div class="dropdown-content">
          <a href="#/profile">Perfil</a>
          <a href="" id ="logOut">Cerrar Sesión</a>
       
        </div>
      </div>
      
      </section>
      <form id="formPost">
      <div>
       <input id="inputPost" type="text" placeholder="Post" autofocus>
      </div>
      <div>
        <button type="submit" id="btnPost">Publicar</button>
      </div>
      <div id="containerPublication"></div>
      </form>
    
      `;
    const timeLineView = document.createElement('section');
    timeLineView.innerHTML = htmlTimeLine;
    return timeLineView;
  }

  
 export function signOut(){
       const logOut = document.getElementById("logOut");
       logOut.addEventListener("click", (event) => {
       
        event.preventDefault();
         console.log("realizado");
        profileSignOut();
       });
      
}

   


export function dropdownMenu() {
  const buttonMenu = document.getElementById('btn');
  buttonMenu.addEventListener('click', () => {
    console.log('Soy un boton que funciona');
  });
}

//Funcion para publicar//


// export function eventPost(){

//     const postButton = document.getElementById("formPost");
//     const containerPublication = document.getElementById("containerPublication");

//      //pintar publicaciones de firestore//

//      window.addEventListener("DOMContentLoaded", async (event) =>{
//        onGetPublication((querySnapshot)=>{
//          containerPublication.innerHTML ="";
//         querySnapshot.forEach(doc =>{
//             console.log(doc.data())
//             containerPublication.innerHTML += `<div>
//             ${doc.data().publications}
//             <div>
//              <button class="btnEliminar">Eliminar</button>
//              <button>Editar</button>
//             </div>
//             </div> `})
//          })
      
//     })

//      postButton.addEventListener("submit", async (event) => {
//       event.preventDefault();

//       const publications = formPost["inputPost"];

//       await savePublication(publications.value);

//       await getPublication();

//       postButton.reset();
//       publications.focus();


     

       
//   })
//   }
