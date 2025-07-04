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

  // Video interaction handlers
  const watchBtn = document.querySelector('.watch-btn');
  const videoThumbnail = document.querySelector('.video-thumbnail');
  const videoModal = document.getElementById('video-modal');
  const videoModalClose = document.querySelector('.video-modal-close');
  const videoModalOverlay = document.querySelector('.video-modal-overlay');
  const loomEmbedContainer = document.getElementById('loom-embed-container');
  
  // Loom embed code
  const loomEmbedHTML = `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/2ea578cee6d74116b211a16accde633d?sid=ff0ac7cc-1a10-474a-877e-26d861031448" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`;
  
  // Function to open video modal
  function openVideoModal() {
    // Add the Loom embed to the container
    loomEmbedContainer.innerHTML = loomEmbedHTML;
    
    // Show the modal
    videoModal.style.display = 'flex';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Focus on the close button for accessibility
    setTimeout(() => {
      videoModalClose.focus();
    }, 300);
  }
  
  // Function to close video modal
  function closeVideoModal() {
    // Hide the modal
    videoModal.style.display = 'none';
    
    // Remove the embed to stop the video
    loomEmbedContainer.innerHTML = '';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  }
  
  // Function to handle video play
  function handleVideoPlay() {
    openVideoModal();
  }

  // Watch button (desktop)
  if (watchBtn) {
    watchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handleVideoPlay();
    });
  }

  // Video thumbnail click (mobile and desktop)
  if (videoThumbnail) {
    videoThumbnail.addEventListener('click', function () {
      handleVideoPlay();
    });

    // Keyboard accessibility for thumbnail
    videoThumbnail.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleVideoPlay();
      }
    });
  }

  // Modal close event listeners
  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModalOverlay) {
    videoModalOverlay.addEventListener('click', closeVideoModal);
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal.style.display === 'flex') {
      closeVideoModal();
    }
  });

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
