import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

// Fiinway brand gradient: Saffron (#E94E24) → Gold (#F3C326) → Green (#69C281)
// matching the logo's diagonal gradient direction
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  element: Element = 'span',
}) => {
  return (
    <Element
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #E94E24 0%, #F3C326 50%, #69C281 100%)',
      }}
    >
      {children}
    </Element>
  );
};
