import React, { useState } from 'react';
import Navigation from './common/Navigation';
import Login from './auth/Login';
import '../styles/components/Navigation.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'games', label: 'Games', href: '/games' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'about', label: 'About', href: '/about' }
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Mock login - replace with real authentication
    console.log('Logging in with:', email, password);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  return (
    <div className="layout">
      <Navigation
        items={navItems}
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoginOpen(true)}
        onRegister={() => setIsLoginOpen(true)}
      />

      <main className="layout__main">
        {children}
      </main>

      <footer className="layout__footer">
        <div className="container">
          <p>© 2025 PlayX. All rights reserved.</p>
        </div>
      </footer>

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onRegisterClick={() => {
          // Handle register click
          setIsLoginOpen(false);
        }}
      />
    </div>
  );
};

export default MainLayout;