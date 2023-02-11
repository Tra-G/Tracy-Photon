const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
