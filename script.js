document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
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

  // Video intro click handler
  const videoIntro = document.querySelector('.video-intro');
  const watchBtn = document.querySelector('.watch-btn');

  function handleVideoClick() {
    // Placeholder for video functionality
    alert(
      'Video would play here! You can integrate with YouTube, Vimeo, or a custom video player.'
    );
    console.log('Video intro clicked');
  }

  if (videoIntro) {
    videoIntro.addEventListener('click', handleVideoClick);
  }

  if (watchBtn) {
    watchBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      handleVideoClick();
    });
  }

  // Case study card click handlers
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach((card, index) => {
    card.addEventListener('click', function () {
      const title = card.querySelector('.card-title').textContent;
      // Placeholder for navigation to case study
      alert(`Navigating to ${title} case study...`);
      console.log(`Case study clicked: ${title}`);
    });
  });

  // Add loading animation
  function addLoadingAnimation() {
    const hero = document.querySelector('.hero');
    const videoIntro = document.querySelector('.video-intro');
    const caseStudies = document.querySelector('.case-studies');
    const moreWork = document.querySelector('.more-work');
    const otherWork = document.querySelector('.other-work-section');

    // Initial state - hide elements
    [hero, videoIntro, caseStudies, moreWork, otherWork].forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        // Preserve the existing centering transform and add translateY (negative for top to bottom)
        if (
          el.classList.contains('hero') ||
          el.classList.contains('video-intro')
        ) {
          el.style.transform = 'translateX(-50%) translateY(-20px)';
        } else if (el.classList.contains('case-studies')) {
          el.style.transform = 'translateX(-50%) translateY(-20px)';
        } else if (el.classList.contains('more-work')) {
          el.style.transform = 'translateX(-50%) translateY(-20px)';
        } else if (el.classList.contains('other-work-section')) {
          el.style.transform = 'translateX(-50%) translateY(-20px)';
        }
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });

    // Animate elements with staggered timing
    setTimeout(() => {
      if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 100);

    setTimeout(() => {
      if (videoIntro) {
        videoIntro.style.opacity = '1';
        videoIntro.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (caseStudies) {
        caseStudies.style.opacity = '1';
        caseStudies.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 500);

    setTimeout(() => {
      if (moreWork) {
        moreWork.style.opacity = '1';
        moreWork.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 700);

    setTimeout(() => {
      if (otherWork) {
        otherWork.style.opacity = '1';
        otherWork.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 900);
  }

  // Start loading animation
  addLoadingAnimation();

  // Parallax effect for hero section
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateX(-50%) translateY(${rate}px)`;
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const elementsToObserve = document.querySelectorAll(
    '.case-card, .more-work-content, .other-work-item'
  );
  elementsToObserve.forEach((el) => observer.observe(el));

  // Add CSS for intersection observer animations
  const style = document.createElement('style');
  style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);

  // Handle missing images gracefully
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', function () {
      // Create a placeholder if image fails to load
      const placeholder = document.createElement('div');
      placeholder.style.cssText = `
                width: ${
                  this.offsetWidth || this.getAttribute('width') || '100'
                }px;
                height: ${
                  this.offsetHeight || this.getAttribute('height') || '50'
                }px;
                background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0),
                           linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0);
                background-size: 20px 20px;
                background-position: 0 0, 10px 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                font-size: 12px;
                border-radius: 4px;
            `;
      placeholder.textContent = 'Image';
      this.parentNode.replaceChild(placeholder, this);
    });
  });
});
