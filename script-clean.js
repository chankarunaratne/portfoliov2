// Portfolio website animations and interactions
document.addEventListener('DOMContentLoaded', function () {
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

  // Simple page animations
  setTimeout(() => {
    const elements = [
      '.hero',
      '.video-intro',
      '.case-studies',
      '.more-work',
      '.other-work-section',
      '.writing-section',
      '.articles-section',
      '.testimonials-section',
    ];
    elements.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, 100);

  // Initial state - hide elements that need animation
  const elementsToHide = [
    '.hero',
    '.video-intro',
    '.case-studies',
    '.more-work',
    '.other-work-section',
    '.writing-section',
    '.articles-section',
    '.testimonials-section',
  ];

  elementsToHide.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = '0';
      element.style.transition =
        'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.transform = 'translateY(20px)';
    }
  });
});
