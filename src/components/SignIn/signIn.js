// signin.js
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../AuthoContext/AuthContext';
import './AuthForm.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password });
      const redirectPath = new URLSearchParams(location.search).get('redirect') || '/';
      navigate(redirectPath);
    } catch (error) {
      setError(error.message);
      console.error('Failed to sign in', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="submit-button">Sign In</button>
        </form>
        <p className="auth-link">
          Don't have an account? <Link to="/CreateAccount">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
