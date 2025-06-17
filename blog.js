/* ============================
   blog.js - Funciones Blog
   Proyecto: AguaFix - Servicio de Fontanería
   ============================ */

// Mostrar año actual en el footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Filtro por categoría (para expansión futura)
function filterPostsByCategory(category) {
  const posts = document.querySelectorAll('.blog-post');
  posts.forEach(post => {
    const postCategory = post.getAttribute('data-category');
    if (category === 'all' || postCategory === category) {
      post.classList.remove('hidden');
    } else {
      post.classList.add('hidden');
    }
  });
}

// Mensaje de bienvenida en consola
console.log('%cAguaFix Blog Técnico cargado correctamente', 'color: #2563EB; font-size: 14px; font-weight: bold;');

// Ejemplo: Puedes llamar esta función desde botones futuros así:
// <button onclick="filterPostsByCategory('fugas')">Fugas</button>
