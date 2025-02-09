import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary'; // Variant tlačidla
  size?: 'small' | 'large'; // Veľkosť tlačidla
  children: React.ReactNode; // Obsah tlačidla (napr. text)
  onClick?: () => void; // Funkcia volaná pri kliknutí
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'large',
  children,
  onClick,
}) => {
  // Definovanie základných štýlov pre tlačidlo
  const baseStyles =
    'rounded-[4px] font-extrabold uppercase';

  // Varianty tlačidla
  const variantStyles: Record<string, string> = {
    primary: 'bg-gold_primary text-blue_primary transition duration-200 easi-in-out hover:bg-gold_secondary font-extrabold',
    secondary:
      'bg-transparent border border-gray-500 border-opacity-50 text-gold_secondary hover:border-gold_secondary transition duration-200 easi-in-out font-extrabold',
  };

  // Veľkosti tlačidla
  const sizeStyles: Record<string, string> = {
    small: 'px-[32px] py-[12px] text-sm',
    large: 'px-[40px] py-[18px] text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;