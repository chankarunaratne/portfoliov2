// Portfolio website animations and interactions

document.addEventListener('DOMContentLoaded', function () {
  // Sequential spring blur animation system
  const elementsToAnimate = [
    { selector: '.navbar', delay: 300 },
    { selector: '.hero', delay: 500 },
    { selector: '.video-intro', delay: 700 },
    { selector: '.case-studies', delay: 900 },
    { selector: '.more-work', delay: 1100 },
    { selector: '.other-work-section', delay: 1300 },
    { selector: '.writing-section', delay: 1500 },
    { selector: '.articles-section', delay: 1700 },
    { selector: '.testimonials-section', delay: 1900 },
    { selector: '.final-illustration-section', delay: 2100 },
    { selector: '.footer-section', delay: 2300 },
  ];

  // Start sequential animations
  elementsToAnimate.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      // Apply initial animation class and transitions
      element.classList.add('fade-blur-up');

      // Trigger animation after delay
      setTimeout(() => {
        element.classList.add('animate');
      }, delay);
    }
  });
  // Navbar scrolling effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.webkitBackdropFilter = 'blur(12px)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.80)';
      navbar.style.backdropFilter = 'blur(8px)';
      navbar.style.webkitBackdropFilter = 'blur(8px)';
    }
  });

  // Navigation links functionality
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');
    });
  });

  // Watch button (placeholder - no modal)
  const watchBtn = document.querySelector('.watch-btn');
  if (watchBtn) {
    watchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // Placeholder for future video integration
      console.log('Watch button clicked - video integration coming soon');
    });
  }

  // Case study card click handlers
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach((card) => {
    card.addEventListener('click', function () {
      const title = card.querySelector('.card-title').textContent;
      console.log(`Case study clicked: ${title}`);
      // Placeholder for navigation to case study
    });
  });
});
