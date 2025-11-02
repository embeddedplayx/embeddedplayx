import React, { useState } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Button from '../common/Button';
import '../../styles/components/Auth.scss'

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({
  isOpen,
  onClose,
  onLogin,
  onRegisterClick
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onLogin(email, password);
      onClose();
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="small">
      <div className="auth-form">
        <h2 className="auth-form__title">Welcome Back</h2>
        <p className="auth-form__subtitle">Sign in to continue playing</p>

        {error && (
          <div className="auth-form__error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form__form">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </form>

        <div className="auth-form__footer">
          <p>Don't have an account?</p>
          <Button
            variant="ghost"
            onClick={onRegisterClick}
          >
            Create Account
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Login;