import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import '../styles/statistics.css';

const Statistics = () => {
  // Sample Data for Disease Occurrence
  const diseaseData = [
    { name: 'Jan', Rust: 30, Blight: 10 },
    { name: 'Feb', Rust: 40, Blight: 15 },
    { name: 'Mar', Rust: 25, Blight: 12 },
    { name: 'Apr', Rust: 50, Blight: 20 },
    { name: 'May', Rust: 60, Blight: 25 },
    { name: 'Jun', Rust: 55, Blight: 18 },
  ];

  // Sample Data for Disease Severity Levels
  const severityData = [
    { month: 'Jan', severity: 2.1 },
    { month: 'Feb', severity: 2.8 },
    { month: 'Mar', severity: 2.3 },
    { month: 'Apr', severity: 3.0 },
    { month: 'May', severity: 3.5 },
    { month: 'Jun', severity: 3.2 },
  ];

  return (
    <div className="statistics-container">
      <h1>📊 Disease Statistics</h1>
      <p>Track and analyze the spread of wheat diseases.</p>

      <div className="stats-cards">
        <div className="stats-card">
          <h3>🔥 Total Cases</h3>
          <p>450</p>
        </div>
        <div className="stats-card">
          <h3>🦠 Most Common Disease</h3>
          <p>Wheat Rust</p>
        </div>
        <div className="stats-card">
          <h3>⚠️ High-Risk Period</h3>
          <p>April - June</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart">
          <h2>📈 Disease Occurrence</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={diseaseData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Rust" fill="#ff7043" />
              <Bar dataKey="Blight" fill="#42a5f5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h2>📊 Severity Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={severityData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="severity" stroke="#388e3c" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;