import { useState, useEffect, useRef } from 'react';

/**
 * useReveal — triggers continuously whenever element enters or leaves viewport.
 * This ensures smooth cinematic animations play every time the user navigates
 * or scrolls to a section in the page.
 *
 * @param {number} threshold  Fraction of element visible before firing (0–1). Default 0.12.
 * @param {string} rootMargin Optional margin offset. Default '0px 0px -40px 0px'.
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export const useReveal = (threshold = 0.12, rootMargin = '0px 0px -30px 0px') => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, keep visible
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle inView so animation plays each time section enters viewport
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
};
