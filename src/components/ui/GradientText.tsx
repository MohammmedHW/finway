import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  element: Element = 'span' 
}) => {
  return (
    <Element className={`text-gradient from-indigo-500 via-purple-500 to-pink-500 ${className}`}>
      {children}
    </Element>
  );
};
