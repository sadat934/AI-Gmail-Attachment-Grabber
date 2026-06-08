/**
 * GrabMail Landing Page - Vanilla JS Interactions
 */

/**
 * Toggle FAQ accordion items
 * @param {HTMLButtonElement} button - The clicked FAQ question button
 */
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isOpen = faqItem.classList.contains('open');

  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.classList.remove('open');
  });

  // Open the clicked item if it was closed
  if (!isOpen) {
    faqItem.classList.add('open');
  }
}

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
