/* ============================
   script.js - Funciones JS básicas
   Proyecto: Sabor del Mar
   ============================ */

// Mostrar año actual automáticamente en el footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Menú responsive para móviles (si usas un toggle de hamburguesa)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}

// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mensaje de bienvenida en consola para desarrolladores
console.log('%cBienvenido a Sabor del Mar', 'color: teal; font-size: 16px; font-weight: bold;');
