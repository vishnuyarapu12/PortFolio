import React from 'react';
import clsx from 'clsx';

/**
 * Premium reusable button component.
 * Uses the ocean‑blue accent palette and subtle shadow.
 */
export const Button = ({ children, className = '', onClick, type = 'button', ...rest }) => {
  const baseClasses =
    'px-5 py-2.5 rounded-xl font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-custom shadow-btn-primary hover:-translate-y-1 active:scale-95 bg-ocean-400 text-white hover:bg-ocean-500';

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
