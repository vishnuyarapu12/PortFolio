import React, { useRef, useEffect, useState } from 'react';
/**
 * NavIndicator renders a sliding underline beneath the active nav link.
 * It uses the activeSection prop from Navbar to calculate its position.
 */
export const NavIndicator = ({ navRef, activeSection }) => {
  const [style, setStyle] = useState({ left: 0, width: 0 });
  const update = () => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setStyle({ left: offsetLeft, width: offsetWidth });
    }
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [activeSection, navRef]);
  return (
    <span
      className="absolute bottom-0 h-0.5 bg-ocean-400 rounded transition-all duration-300 ease-custom"
      style={{ left: style.left, width: style.width }}
    />
  );
};
