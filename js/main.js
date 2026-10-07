/**
 * GENZCOINTRADING.COM — MASTER UI CONTROLLER
 * Accordions, Mobile Drawer, Back to Top, Print, and Event Listeners
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const siteNav = document.querySelector('.site-nav');

  if (mobileBtn && siteNav) {
    mobileBtn.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isOpen = siteNav.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !mobileBtn.contains(e.target)) {
        siteNav.classList.remove('open');
      }
    });
  }

  // 2. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Print Buttons
  const printBtns = document.querySelectorAll('[data-print-trigger]');
  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });

  // 5. Tool Filter Buttons (for Tools Hub and Home)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.tool-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      toolCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || filter === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
