// components/ui/Card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ children, className = '', as: Component = 'div' }) => {
  const cardClasses = `bg-white rounded-xl shadow-soft p-6 transition-shadow hover:shadow-lg ${className}`;
  
  return <Component className={cardClasses}>{children}</Component>;
};

export { Card };