function updateButtons() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const psw = urlParams.get('psw');

  if (id && psw) {
      localStorage.setItem("loggedInUser", id);
  }

  const loggedInUser = id || localStorage.getItem("loggedInUser");

  if (loggedInUser) {
      const navUl = document.querySelector('nav ul');
      const navButtons = navUl.querySelectorAll('li a');
      navButtons.forEach((button) => {
          if (button.textContent === 'Connexion' || button.textContent === 'S\'inscrire') {
              if (button.textContent === 'Connexion') {
                  button.textContent = `Bonjour, ${loggedInUser}`;
                  const coursesLi = document.createElement('li');
                  const coursesLink = document.createElement('a');
                  coursesLink.href = 'course.html';
                  coursesLink.textContent = 'Courses';
                  coursesLi.appendChild(coursesLink);
                  navUl.insertBefore(coursesLi, button.parentElement.nextSibling);
              } else {
                  button.parentElement.style.display = 'none';
              }
          }
      });
  }
}

window.onload = updateButtons;