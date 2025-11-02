import React from 'react';
import '../../styles/components/Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const inputClasses = [
    'input__field',
    error ? 'input__field--error' : '',
    leftIcon ? 'input__field--left-icon' : '',
    rightIcon ? 'input__field--right-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input">
      {label && (
        <label className="input__label">
          {label}
        </label>
      )}
      
      <div className="input__wrapper">
        {leftIcon && (
          <span className="input__icon input__icon--left">
            {leftIcon}
          </span>
        )}
        
        <input className={inputClasses} {...props} />
        
        {rightIcon && (
          <span className="input__icon input__icon--right">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span className="input__error">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;