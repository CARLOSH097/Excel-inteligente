const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('guide-form').addEventListener('submit', event => {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = '¡Gracias! Para recibir correos de verdad, conecta este formulario a una herramienta de email marketing antes de publicar.';
  message.style.color = '#a7f3d0';
});
