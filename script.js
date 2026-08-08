// Sticky header, back-to-top, scroll progress
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');
const progress = document.getElementById('progress');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 500);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (y / h * 100) + '%';
}, {passive: true});

toTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold: .15, rootMargin: '0px 0px -40px 0px'});
document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));

// Animated counters
const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, target = +el.dataset.target, dur = 1600, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, {threshold: .6});
document.querySelectorAll('.count').forEach(el => cio.observe(el));
