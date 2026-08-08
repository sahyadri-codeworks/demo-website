// Highlight the nav link for the section currently in view
const links = document.querySelectorAll('nav a[href^="#"]:not(.btn)');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s; });
  links.forEach(a => a.style.color = (current && a.getAttribute('href') === '#' + current.id) ? '#14263f' : '');
}, {passive: true});
