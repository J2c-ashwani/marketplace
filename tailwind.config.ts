// components/ui/Button.tsx
import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses = "font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

    const variantClasses = {
      primary: 'bg-brand-primary text-white hover:bg-green-800 focus:ring-brand-primary',
      secondary: 'bg-brand-secondary text-white hover:bg-blue-800 focus:ring-brand-secondary',
      accent: 'bg-brand-accent text-white hover:bg-orange-600 focus:ring-brand-accent',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return <button className={combinedClasses} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button };