import { useState, useEffect, useRef } from 'react';

/**
 * useReveal — fires once when element enters viewport.
 *
 * @param {number} threshold  Fraction of element visible before firing (0–1). Default 0.15.
 * @param {string} rootMargin Optional margin offset. Default '0px'.
 * @returns {{ ref, inView }}
 */
export const useReveal = (threshold = 0.15, rootMargin = '0px') => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
};
