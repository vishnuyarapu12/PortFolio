import { useState, useEffect } from 'react';

/**
 * Hook that returns true when the element with the given ref is in view.
 * Uses IntersectionObserver with a default threshold of 0.15.
 */
export const useInView = (ref, options = { threshold: 0.15 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};
