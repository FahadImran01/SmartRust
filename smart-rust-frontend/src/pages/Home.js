import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="overlay" />
      <div className="hero-content">
        <h1 className="fade-in-down">Welcome to <span>SmartRust</span></h1>
        <p className="fade-in-up">Your AI-powered wheat disease detection and management system.</p>
        <div className="cta-buttons fade-in-up">
          <Link to="/upload" className="btn-primary">Upload Image</Link>
          <Link to="/dashboard" className="btn-secondary">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;