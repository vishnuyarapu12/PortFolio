import React from 'react';
import { useReveal } from '../hooks/useReveal';

/**
 * AnimatedSection — cinematic section-level reveal wrapper.
 *
 * Wraps an entire section. Smoothly fades and rises every time
 * the section enters the viewport during page scrolling or navigation.
 *
 * Props:
 *   delay     — transitionDelay in ms (default 0)
 *   threshold — IntersectionObserver threshold (default 0.1)
 *   className — forwarded to wrapper div
 */
export const AnimatedSection = ({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const { ref, inView } = useReveal(threshold);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateY(0px) scale(1)'
          : 'translateY(35px) scale(0.975)',
        transition: `
          opacity 850ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform 850ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Reveal — individual element reveal with stagger support.
 *
 * Designed for cards, headings, and individual items that stagger
 * inside a parent section.
 *
 * Props:
 *   delay     — transitionDelay in ms for stagger (default 0)
 *   y         — translateY start distance in px (default 20)
 *   duration  — animation duration in ms (default 700)
 *   threshold — IntersectionObserver threshold (default 0.08)
 *   as        — element tag to render (default 'div')
 *   className — forwarded to element
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 20,
  duration = 700,
  threshold = 0.08,
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) => {
  const { ref, inView } = useReveal(threshold);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateY(0px) scale(1)'
          : `translateY(${y}px) scale(0.98)`,
        transition: `
          opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
