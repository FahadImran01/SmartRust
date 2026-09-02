import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    if (!email || !password) {
      setError('Both email and password are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed.');
        setLoading(false);
        return;
      }

      if (onLogin) onLogin();

      // Immediately stop loading, show success, and navigate
      setLoading(false);
      setSuccess(true);
      navigate('/home');

    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login to SmartRust</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <div className="forgot-password">
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className={`primary-btn ${loading ? 'loading' : ''} ${success ? 'success' : ''}`}
            disabled={loading || success}
          >
            {success ? '✓ Logged In' : loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="switch-auth">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      {loading && (
        <div className="loading-overlay">
          <div className="blur-background"></div>
          <div className="loader-circle"></div>
          <p>Authenticating...</p>
        </div>
      )}
    </div>
  );
}
