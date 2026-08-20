/**
 * smoothScrollTo — custom eased scroll for navbar navigation.
 *
 * Uses easeInOutQuart for a snappy start and soft landing.
 * Duration is intentionally kept at 650ms — fast enough to feel
 * responsive, slow enough to feel premium. The cinematic feeling
 * comes from section reveal animations, NOT from scroll speed.
 *
 * @param {number} targetY   Target scroll Y position in px
 * @param {number} duration  Duration in ms (default 650)
 */
export const smoothScrollTo = (targetY, duration = 650) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  // easeInOutQuart — snappy acceleration, soft deceleration
  const ease = (t) => {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
