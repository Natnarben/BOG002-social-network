import {profileSignOut} from "../firebase/firebaseAuth.js"


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
      
      </section>`;
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
