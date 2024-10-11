function updateButtons() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const psw = urlParams.get('psw');
  
    if (id && psw) {
      const navButtons = document.querySelectorAll('nav ul li a');
      navButtons.forEach((button) => {
        if (button.textContent === 'Connexion') {
          button.textContent = `Bonjour, ${id}`;
        } else if (button.textContent === 'S\'inscrire') {
          button.style.display = 'none';
        }
      });
    }
  }
  
window.onload = updateButtons;

