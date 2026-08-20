import React from 'react';
import { useReveal } from '../hooks/useReveal';

/**
 * AnimatedSection — cinematic section-level reveal wrapper.
 *
 * Wraps an entire section. When 15% of the section enters the viewport,
 * it fades in and gently rises from below. Animates once only.
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
          : 'translateY(45px) scale(0.97)',
        transition: `
          opacity  0.95s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform 0.95s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
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
 * Lighter than AnimatedSection — designed for cards, headings,
 * individual items that should stagger within a parent section.
 *
 * Props:
 *   delay     — transitionDelay in ms for stagger (default 0)
 *   y         — translateY start distance in px (default 28)
 *   duration  — animation duration in ms (default 750)
 *   threshold — IntersectionObserver threshold (default 0.12)
 *   as        — element tag to render (default 'div')
 *   className — forwarded to element
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  duration = 750,
  threshold = 0.12,
  as: Tag = 'div',
  className = '',
  style = {},
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
          : `translateY(${y}px) scale(0.97)`,
        transition: `
          opacity  ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
};
