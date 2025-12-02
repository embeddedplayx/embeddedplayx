import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/components/Auth.scss';
import '../styles/components/Button.scss';
import GoogleButton from '../components/auth/GoogleButton';

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err?.message || 'Sign in failed');
    }
  };

  return (
    <div className="auth-page container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form__form">
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </label>
        {error && <div className="auth-form__error">{error}</div>}
        <button className="button button--primary" type="submit">Sign In</button>
      </form>

      <div style={{ marginTop: 16 }}>
        <GoogleButton />
      </div>
    </div>
  );
};

export default LoginPage;
