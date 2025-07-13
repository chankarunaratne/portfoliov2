// Portfolio website animations and interactions

document.addEventListener("DOMContentLoaded", function () {
  // Sequential spring blur animation system
  const elementsToAnimate = [
    { selector: ".navbar", delay: 300 },
    { selector: ".hero", delay: 500 },
    { selector: ".video-intro", delay: 700 },
    { selector: ".case-studies", delay: 900 },
    { selector: ".more-work", delay: 1100 },
    { selector: ".other-work-section", delay: 1300 },
    { selector: ".writing-section", delay: 1500 },
    { selector: ".articles-section", delay: 1700 },
    { selector: ".testimonials-section", delay: 1900 },
    { selector: ".final-illustration-section", delay: 2100 },
    { selector: ".footer-section", delay: 2300 },
  ];

  // Start sequential animations
  elementsToAnimate.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      // Apply initial animation class and transitions
      element.classList.add("fade-blur-up");

      // Trigger animation after delay
      setTimeout(() => {
        element.classList.add("animate");
      }, delay);
    }
  });
  // Navbar scrolling effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      navbar.style.backdropFilter = "blur(12px)";
      navbar.style.webkitBackdropFilter = "blur(12px)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.80)";
      navbar.style.backdropFilter = "blur(8px)";
      navbar.style.webkitBackdropFilter = "blur(8px)";
    }
  });

  // Navigation links functionality
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");
    });
  });

  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuToggle && mobileMenuOverlay) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = mobileMenuToggle.classList.contains("active");

      if (isActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        mobileMenuOverlay.classList.contains("active") &&
        !mobileMenuOverlay.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Handle mobile nav link clicks
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all mobile links
        mobileNavLinks.forEach((l) => l.classList.remove("active"));
        // Remove active class from desktop links too
        navLinks.forEach((l) => l.classList.remove("active"));

        // Add active class to clicked mobile link
        this.classList.add("active");

        // Add active class to corresponding desktop link
        const linkText = this.textContent;
        const correspondingDesktopLink = Array.from(navLinks).find(
          (link) => link.textContent === linkText
        );
        if (correspondingDesktopLink) {
          correspondingDesktopLink.classList.add("active");
        }

        // Close mobile menu after selection
        closeMobileMenu();
      });
    });

    function openMobileMenu() {
      mobileMenuToggle.classList.add("active");
      mobileMenuOverlay.classList.add("active");
    }

    function closeMobileMenu() {
      mobileMenuToggle.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
    }
  }

  // Video interaction handlers
  const watchBtn = document.querySelector(".watch-btn");
  const videoThumbnail = document.querySelector(".video-thumbnail");
  const videoModal = document.getElementById("video-modal");
  const videoModalClose = document.querySelector(".video-modal-close");
  const videoModalOverlay = document.querySelector(".video-modal-overlay");
  const loomEmbedContainer = document.getElementById("loom-embed-container");

  // Loom video configuration
  const loomVideoId = "2ea578cee6d74116b211a16accde633d";
  const loomVideoUrl = `https://www.loom.com/share/${loomVideoId}`;

  // Loom embed code
  const loomEmbedHTML = `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/${loomVideoId}?sid=ff0ac7cc-1a10-474a-877e-26d861031448" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`;

  // Mobile detection function
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Initialize mobile GIF thumbnail if on mobile
  function initializeMobileVideoThumbnail() {
    // No longer replacing thumbnail content on mobile
    // Let CSS handle the custom video-icon.png background
    return isMobileDevice(); // Just return if it's mobile for other logic
  }

  // Function to open video modal
  function openVideoModal() {
    // Add the Loom embed to the container
    loomEmbedContainer.innerHTML = loomEmbedHTML;

    // Show the modal
    videoModal.style.display = "flex";

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Focus on the close button for accessibility
    setTimeout(() => {
      videoModalClose.focus();
    }, 300);
  }

  // Function to close video modal
  function closeVideoModal() {
    // Hide the modal
    videoModal.style.display = "none";

    // Remove the embed to stop the video
    loomEmbedContainer.innerHTML = "";

    // Restore body scrolling
    document.body.style.overflow = "auto";
  }

  // Function to handle video play
  function handleVideoPlay() {
    openVideoModal();
  }

  // Initialize video thumbnail based on device type
  const isMobile = initializeMobileVideoThumbnail();

  // Add modal event handlers for both mobile and desktop
  // Watch button
  if (watchBtn) {
    watchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handleVideoPlay();
    });
  }

  // Video thumbnail click
  if (videoThumbnail) {
    videoThumbnail.addEventListener("click", function () {
      handleVideoPlay();
    });

    // Keyboard accessibility for thumbnail
    videoThumbnail.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleVideoPlay();
      }
    });
  }

  // Make entire video-intro section clickable on mobile
  const videoIntroSection = document.querySelector(".video-intro");
  if (videoIntroSection && isMobileDevice()) {
    videoIntroSection.addEventListener("click", function (e) {
      // Only trigger if the click wasn't on the thumbnail (to avoid double-triggering)
      if (!videoThumbnail || !videoThumbnail.contains(e.target)) {
        handleVideoPlay();
      }
    });

    // Add cursor pointer style for mobile
    videoIntroSection.style.cursor = "pointer";

    // Keyboard accessibility for the entire section on mobile
    videoIntroSection.setAttribute("tabindex", "0");
    videoIntroSection.setAttribute("role", "button");
    videoIntroSection.setAttribute(
      "aria-label",
      "Play Chan's video introduction"
    );

    videoIntroSection.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleVideoPlay();
      }
    });
  }

  // Modal close event listeners
  if (videoModalClose) {
    videoModalClose.addEventListener("click", closeVideoModal);
  }

  if (videoModalOverlay) {
    videoModalOverlay.addEventListener("click", closeVideoModal);
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoModal.style.display === "flex") {
      closeVideoModal();
    }
  });

  // Handle window resize to switch between mobile/desktop modes
  let resizeTimeout;
  let wasMobile = isMobile;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      // Reload the page if device type changes to ensure proper initialization
      const currentlyMobile = isMobileDevice();
      if (currentlyMobile !== wasMobile) {
        location.reload();
      }
    }, 250);
  });

  // Case study card click handlers
  const caseCards = document.querySelectorAll(".case-card");
  caseCards.forEach((card) => {
    card.addEventListener("click", function () {
      const title = card.querySelector(".card-title").textContent;
      console.log(`Case study clicked: ${title}`);
      // Placeholder for navigation to case study
    });
  });
});
