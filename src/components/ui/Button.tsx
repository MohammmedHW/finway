import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg shadow-secondary/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 focus:ring-slate-500',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };

  // Ensure Tailwind v4 gradient button style for premium look if primary
  const primaryGradient = variant === 'primary' 
    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0'
    : variants[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variant === 'primary' ? primaryGradient : variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
