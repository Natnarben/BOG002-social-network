

export function profilePage() {
    const htmlProfile = `
      <div class="divProfile">
          <p>THIS IS THE PROFILE</p>  
      </div>`;
  
    const profileView = document.createElement('section');
    profileView.className = 'profileClass';
    profileView.innerHTML = htmlProfile;
    return profileView;
  }
  