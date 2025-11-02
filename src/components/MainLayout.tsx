import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './common/Navigation';
import Footer from './Footer';
import Login from './auth/Login';
import '../styles/components/Navigation.scss';

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'games', label: 'Games', href: '/games' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'about', label: 'About', href: '/about' }
];

const MainLayout: React.FC = () => {
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
        <Outlet />
      </main>

      <Footer />

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