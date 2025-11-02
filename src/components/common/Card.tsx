import React from 'react';
import '../../styles/components/Card.scss';

interface CardProps {
  variant?: 'default' | 'hover' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  onClick
}) => {
  const classes = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    onClick ? 'card--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  overlay?: React.ReactNode;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  overlay
}) => (
  <div className={`card__image card__image--${aspectRatio}`}>
    <img src={src} alt={alt} />
    {overlay && <div className="card__image-overlay">{overlay}</div>}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="card__body">{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="card__footer">{children}</div>
);

export default Card;