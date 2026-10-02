// Mobile menu
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

function setMenu(open) {
  header.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
}

toggle?.addEventListener('click', () => setMenu(!header.classList.contains('open')));
document.querySelectorAll('.site-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Hide screenshot areas if the images are missing, so the text takes the full width
window.addEventListener('load', () => {
  document.querySelectorAll('.case-shots').forEach(box => {
    if (!box.querySelector('img')) {
      box.remove();
    }
  });
  document.querySelectorAll('.case').forEach(c => {
    if (!c.querySelector('.case-shots')) c.style.gridTemplateColumns = '1fr';
  });
});

// Keep the footer year current
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
