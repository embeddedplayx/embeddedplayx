import React from 'react';
import '../../styles/components/Button.scss';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? 'button--full' : '',
    isLoading ? 'button--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={isLoading || disabled}
      {...props}
    >
      <span className="button__content">
        {!isLoading && leftIcon && <span className="button__icon button__icon--left">{leftIcon}</span>}
        <span className="button__text">{children}</span>
        {!isLoading && rightIcon && <span className="button__icon button__icon--right">{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;