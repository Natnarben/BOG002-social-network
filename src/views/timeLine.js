import {profileSignOut, savePublication, getPublication, onGetPublication, deletePublication, getPublicationsId, updatePost } from "../firebase/firebaseAuth.js"


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


export function eventPost(){

    const postButton = document.getElementById("formPost");
    const containerPublication = document.getElementById("containerPublication");
   
    let editStatus = false;
    let id = "";

    postButton.addEventListener("submit", async (event) => {
      event.preventDefault();

      const publications = formPost["inputPost"];

      if(!editStatus){
        await savePublication(publications.value);
      }
      else{
       await updatePost(id, {
         descripcion:publications.value
       });

       editStatus = false;
       id = "";
       formPost["btnPost"].innerHTML = "Publicar";
      }
   
     

      await getPublication();

      postButton.reset();
      publications.focus();
     
  })

     //pintar publicaciones de firestore//


     onGetPublication((querySnapshot)=>{
      containerPublication.innerHTML ="";
     querySnapshot.forEach((doc) =>{
      const postData = doc.data();
      postData.id = doc.id;


        //  console.log(doc.data());
         
        // const post = doc.data()
        // post.id = doc.id;

         containerPublication.innerHTML += `
         <p id="user-name">${postData.name}</p>

         <div>
         ${postData.descripcion}
         <div>
          <button type="button" class="btn-delete" data-id="${postData.id}">Eliminar</button>
          <button type="button" class="btn-edit" data-id="${postData.id}">Editar</button>
         </div>
         </div> `;

         //Boton Eliminar//

        const btnDelete = document.querySelectorAll(".btn-delete");
        btnDelete.forEach(btn =>{
          btn.addEventListener("click", async (e)=>{
           await deletePublication(e.target.dataset.id);
          })
        });


          //Boton editar//
        const btnEdit = document.querySelectorAll(".btn-edit");
        btnEdit.forEach(btn =>{
          btn.addEventListener("click", async (e)=>{
          const doc= await getPublicationsId (e.target.dataset.id);
        //  console.log(doc.data());

          const post = doc.data();

          editStatus= true;
          id = doc.id;

          formPost["inputPost"].value = post.descripcion;
          formPost["btnPost"].innerHTML = "Guardar";
           })
        });
})
      })
    
}
