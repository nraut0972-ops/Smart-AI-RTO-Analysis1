// responsive.js - Common responsive functions for all pages

// Mobile menu toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
}

// Make tables responsive on mobile
function makeTablesResponsive() {
  document.querySelectorAll('table:not(.responsive-table table)').forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'responsive-table';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// Auto-resize textareas
function autoResizeTextareas() {
  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  });
}

// Touch-friendly buttons
function enhanceTouchButtons() {
  document.querySelectorAll('.btn, button, a[href]').forEach(button => {
    button.addEventListener('touchstart', function() {
      this.classList.add('touch-active');
    });
    
    button.addEventListener('touchend', function() {
      this.classList.remove('touch-active');
    });
  });
}

// Responsive images
function makeImagesResponsive() {
  document.querySelectorAll('img:not(.responsive-img):not(.img-fluid)').forEach(img => {
    if (!img.classList.contains('responsive-img')) {
      img.classList.add('responsive-img');
    }
  });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  makeTablesResponsive();
  autoResizeTextareas();
  enhanceTouchButtons();
  makeImagesResponsive();
  
  // Close mobile menu on resize
  window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768 && navLinks) {
      navLinks.classList.remove('active');
    }
  });
});

// Add CSS class for touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  document.documentElement.classList.add('touch-device');
} else {
  document.documentElement.classList.add('no-touch');
}
