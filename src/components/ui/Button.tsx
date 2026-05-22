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
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'h-9 px-5 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };

  // Brand-themed variant styles
  const variantStyles: Record<string, string> = {
    // Saffron → Gold → Green gradient (mirrors the logo)
    primary: [
      'text-white border-0 shadow-lg',
      'hover:shadow-xl hover:brightness-105',
      'focus:ring-[#E94E24]',
    ].join(' '),

    // Outlined using saffron brand color
    outline: [
      'border-2 border-[#E94E24] text-[#E94E24]',
      'hover:bg-[#E94E24]/10',
      'dark:border-[#F3C326] dark:text-[#F3C326] dark:hover:bg-[#F3C326]/10',
      'focus:ring-[#E94E24]',
    ].join(' '),

    // Green-accented secondary
    secondary: [
      'text-white border-0 shadow-md',
      'focus:ring-[#69C281]',
    ].join(' '),

    ghost: 'hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 focus:ring-slate-500',
  };

  const getStyle = () => {
    if (variant === 'primary') {
      return {
        background: 'linear-gradient(135deg, #E94E24 0%, #F3C326 50%, #69C281 100%)',
      };
    }
    if (variant === 'secondary') {
      return {
        background: 'linear-gradient(135deg, #69C281 0%, #4DA866 100%)',
      };
    }
    return {};
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={getStyle()}
      className={`${baseStyles} ${variantStyles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
