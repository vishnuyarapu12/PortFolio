import { useState, useEffect, useRef } from 'react';

/**
 * useReveal — fires once when element enters viewport.
 * Disconnects automatically after triggering to avoid redundant re-animations.
 *
 * @param {number} threshold  Fraction of element visible before firing (0–1). Default 0.15.
 * @param {string} rootMargin Optional margin offset. Default '0px 0px -40px 0px'.
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export const useReveal = (threshold = 0.15, rootMargin = '0px 0px -40px 0px') => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, trigger immediately
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
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Fire once and disconnect
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
};
