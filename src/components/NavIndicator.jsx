import React, { useEffect, useState } from 'react';

/**
 * NavIndicator renders a smooth sliding pill capsule behind the active nav item.
 * It calculates offsetLeft and offsetWidth of the active button within navRef.
 */
export const NavIndicator = ({ navRef, activeSection }) => {
  const [style, setStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const update = () => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (activeEl) {
      setStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1
      });
    } else {
      setStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [activeSection, navRef]);

  return (
    <span
      className="absolute top-1 bottom-1 bg-gradient-to-r from-ocean-500/30 to-sky-500/30 border border-ocean-400/40 rounded-full shadow-[0_0_14px_rgba(10,126,169,0.25)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-0"
      style={{
        left: `${style.left}px`,
        width: `${style.width}px`,
        opacity: style.opacity
      }}
      aria-hidden="true"
    />
  );
};
