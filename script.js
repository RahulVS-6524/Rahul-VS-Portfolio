// Smooth scroll animation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hero text animation
window.addEventListener('load', () => {
  document.querySelector('.hero-content').classList.add('fade-in');
});