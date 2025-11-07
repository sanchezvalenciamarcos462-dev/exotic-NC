// Menú responsivo
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Abrir y cerrar menú
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("menu-open"); // evita scroll
});

// Cerrar menú al hacer clic en cualquier enlace
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
