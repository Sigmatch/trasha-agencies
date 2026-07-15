// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// Plot filtering (values come from each button's data-filter attribute)
const filters = document.querySelectorAll('.filter');
const plotCards = document.querySelectorAll('.plot-card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const value = btn.dataset.filter;
    plotCards.forEach(card => {
      const match = value === 'all' || card.dataset.status === value;
      card.dataset.hide = match ? 'false' : 'true';
    });
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Demo contact form (no backend — this is a pitch build)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('[name="name"]').value.trim();
  note.textContent = `Thanks${name ? ', ' + name.split(' ')[0] : ''} — this is a demo form. Connect it to email or WhatsApp before launch.`;
  form.reset();
});
