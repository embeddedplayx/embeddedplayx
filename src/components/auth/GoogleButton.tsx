import React from 'react';
import useAuth from '../../hooks/useAuth';
import '../../styles/components/Button.scss';

const GoogleButton: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { signInWithGoogle } = useAuth();

  return (
    <button className="button button--outline" onClick={() => signInWithGoogle()}>
      <span style={{ marginRight: 8 }}>🟢</span>
      {children || 'Continue with Google'}
    </button>
  );
};

export default GoogleButton;
