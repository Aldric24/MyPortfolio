// Existing scroll reveal logic
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
  observer.observe(sec);
});

// Project Cards Expansion Logic
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  // Click on the card itself to expand
  card.addEventListener('click', (e) => {
    // Prevent clicking if we hit a link or close button inside
    if (e.target.closest('.close-detail') || e.target.closest('a') || e.target.closest('.gallery-thumbs') || e.target.closest('.gallery-main')) {
      return;
    }

    // Close other expanded cards
    projectCards.forEach(c => {
      if (c !== card && c.classList.contains('expanded')) {
        c.classList.remove('expanded');
      }
    });

    // Toggle current card
    card.classList.toggle('expanded');

    // Smooth scroll into view if expanding
    if (card.classList.contains('expanded')) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  });

  // Close button logic
  const closeBtn = card.querySelector('.close-detail');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.remove('expanded');
    });
  }

  // Gallery Thumbnail Logic
  const mainImg = card.querySelector('.gallery-main img');
  const thumbs = card.querySelectorAll('.gallery-thumbs img');

  if (mainImg && thumbs.length > 0) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        // Update main image source
        mainImg.src = thumb.src;
        // Update active class
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // Lightbox Logic for Main Image
    mainImg.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(mainImg.src);
    });
  }
});

// Global Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxClose) {
    closeLightbox();
  }
});

// Escape key to close expanded card or lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox.classList.contains('open')) {
      closeLightbox();
    } else {
      const expandedCard = document.querySelector('.project-card.expanded');
      if (expandedCard) {
        expandedCard.classList.remove('expanded');
      }
    }
  }
});