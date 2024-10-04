function handleSubmit(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const psw = document.getElementById('psw').value;
    console.log(`Identifiant: ${id}, Mot de passe: ${psw}`);
    // Update the navigation buttons
    updateButtons(id, psw);
  }
  
  function updateButtons(id, psw) {
    const navButtons = document.querySelectorAll('nav ul li a');
    navButtons.forEach((button) => {
      if (button.textContent === 'Connexion' || button.textContent === 'S\'inscrire') {
        button.textContent = `Bonjour, ${id} ${psw}`;
      }
    });
  }
  
  // Add an event listener to the form submission
  document.getElementById('inscription').addEventListener('submit', handleSubmit);
window.onload = updateButtons;
// window.onload = () => {
//     document.getElementById('inscription').onsubmit = (e) => {
//         e.preventDefault();

        

//         e.submit();
//     }
// }