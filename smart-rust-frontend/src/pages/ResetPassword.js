import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Reuse login styles

export default function ResetPassword() {
  const { token } = useParams(); // extract token from URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/ResetPassword/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          token: token,
          newPassword: password,
          confirmPassword: confirmPassword 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Reset failed.');
      } else {
        setMessage('Password reset successfully. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2500);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Your Password</h2>
        {error && <p className="error">{error}</p>}
        {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}

        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="primary-btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
}