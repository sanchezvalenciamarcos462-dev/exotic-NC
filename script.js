// Menú responsive (abrir/cerrar)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
