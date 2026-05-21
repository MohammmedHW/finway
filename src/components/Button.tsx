interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition-colors focus:outline-none";
  const styles =
    variant === 'primary'
      ? "bg-primary text-white hover:bg-primary/90"
      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

