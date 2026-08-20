import React from 'react';
import clsx from 'clsx';

/**
 * Premium reusable button component.
 * Supports 'primary', 'secondary', 'ghost', 'white' variants.
 */
export const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-ocean-500 to-sky-500 hover:from-ocean-400 hover:to-sky-400 text-white shadow-btn-primary hover:shadow-[0_0_20px_rgba(10,126,169,0.35)] border border-ocean-400/30',
    secondary:
      'glass-card border border-dark-border hover:border-ocean-400/40 text-slate-200 hover:text-white hover:bg-dark-cardHover',
    white:
      'bg-white text-dark-bg hover:bg-slate-100 font-bold shadow-sm',
    ghost:
      'bg-dark-card border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white',
  };

  const baseClasses =
    'px-5 py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 cursor-pointer inline-flex items-center justify-center';

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, variantStyles[variant] || variantStyles.primary, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
