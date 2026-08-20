import React, { useEffect, useState, useCallback } from 'react';

/**
 * NavIndicator renders a smooth sliding glass pill capsule behind the active nav item.
 * Uses GPU-accelerated transforms for instantaneous 60/120fps glide between tabs.
 */
export const NavIndicator = ({ navRef, activeSection }) => {
  const [coords, setCoords] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const update = useCallback(() => {
    if (!navRef?.current) return;
    const activeEl = navRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (activeEl) {
      setCoords({
        left: activeEl.offsetLeft,
        top: activeEl.offsetTop,
        width: activeEl.offsetWidth,
        height: activeEl.offsetHeight,
        opacity: 1,
      });
    } else {
      setCoords((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, navRef]);

  useEffect(() => {
    update();
    const handleResize = () => update();
    window.addEventListener('resize', handleResize);
    // Double check when layout/fonts settle
    const timer = setTimeout(update, 50);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [update]);

  return (
    <span
      className="absolute top-0 left-0 bg-gradient-to-r from-ocean-500/35 to-sky-500/35 border border-ocean-400/50 rounded-full shadow-[0_0_15px_rgba(10,126,169,0.35)] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-0"
      style={{
        transform: `translate3d(${coords.left}px, ${coords.top}px, 0)`,
        width: `${coords.width}px`,
        height: `${coords.height}px`,
        opacity: coords.opacity,
      }}
      aria-hidden="true"
    />
  );
};
