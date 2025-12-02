import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/components/Auth.scss';

const RegisterPage: React.FC = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signUp(email, password, username);
      navigate('/');
    } catch (err: any) {
      setError(err?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-page container">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit} className="auth-form__form">
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </label>
        {error && <div className="auth-form__error">{error}</div>}
        <button className="button button--primary" type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
