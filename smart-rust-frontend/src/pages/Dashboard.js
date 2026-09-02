import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to SmartRust Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Disease Detection</h2>
          <p>Upload wheat crop images and detect diseases instantly.</p>
          <button onClick={() => navigate('/upload')}>Go to Upload</button>
        </div>

        <div className="dashboard-card">
          <h2>Statistics</h2>
          <p>Analyze the disease reports and predictions in real-time.</p>
          <button onClick={() => navigate('/stats')}>View Stats</button>
        </div>

        <div className="dashboard-card">
          <h2>Recommendations</h2>
          <p>Get recommendations for managing and preventing diseases.</p>
          <button onClick={() => navigate('/recommendations')}>Get Recommendations</button>
        </div>
      </div>
    </div>
  );
}
