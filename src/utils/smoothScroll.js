/**
 * smoothScrollTo — instant, hardware-accelerated smooth navigation scroll.
 * Uses native window.scrollTo with smooth behavior for 60/120fps responsiveness without delay.
 *
 * @param {number} targetY Target scroll Y position in px
 */
export const smoothScrollTo = (targetY) => {
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  });
};
