import React, { useState } from 'react';
import '../../styles/components/Navigation.scss';
import Button from './Button';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
  onLogin?: () => void;
  onRegister?: () => void;
  isLoggedIn?: boolean;
  userAvatar?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  onLogin,
  onRegister,
  isLoggedIn = false,
  userAvatar
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="/" className="nav__logo">
          PlayX
        </a>

        <button
          className={`nav__mobile-toggle ${isMobileMenuOpen ? 'nav__mobile-toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav__menu ${isMobileMenuOpen ? 'nav__menu--open' : ''}`}>
          <ul className="nav__items">
            {items.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__auth">
            {!isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogin}
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onRegister}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <div className="nav__user">
                <img
                  src={userAvatar || '/assets/avatars/default.jpg'}
                  alt="User avatar"
                  className="nav__avatar"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;