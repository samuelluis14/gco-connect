//  GCO CONNECT - JAVASCRIPT
//  CREATED BY: Samuel Luis V. Moran

// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});


// NAVBAR SCROLL SHADOW
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.18)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.10)';
  }
});


// SMOOTH SCROLL FOR ANCHOR LINKS 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});


// SCROLL REVEAL ANIMATION 
const revealElements = document.querySelectorAll(
  '.feature-card, .step, .hero-card, .stat'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
