import React from 'react';
import '../styles/dashboard.css';

export default function Results() {
  return (
    <div className="dashboard-content">
      <h1>Disease Detection Results</h1>
      <div className="results-table-container">
        <table className="results-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Disease Detected</th>
              <th>Confidence</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://via.placeholder.com/50" alt="Wheat" /></td>
              <td>Leaf Rust</td>
              <td>95%</td>
              <td>2025-03-20</td>
            </tr>
            <tr>
              <td><img src="https://via.placeholder.com/50" alt="Wheat" /></td>
              <td>Stem Rust</td>
              <td>90%</td>
              <td>2025-03-18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
