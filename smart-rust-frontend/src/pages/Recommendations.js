import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/recommendations.css';

const Recommendations = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      title: "Brown Rust",
      description: "Manage brown rust through timely fungicide application and resistant varieties.",
      icon: "🌾",
      route: "brown-rust"
    },
    {
      title: "Black Rust",
      description: "Prevent black rust by rotating crops and monitoring infected areas regularly.",
      icon: "🌾",
      route: "black-rust"
    },
    {
      title: "Yellow Rust",
      description: "Use resistant wheat breeds and monitor weather to control yellow rust outbreaks.",
      icon: "🌾",
      route: "yellow-rust"
    },
    {
      title: "Soil Health Management",
      description: "Use balanced fertilizers and maintain proper soil pH for disease resistance.",
      icon: "🧪",
      route: "soil-health"
    },
    {
      title: "Weather Monitoring",
      description: "Stay updated on humidity and temperature levels to predict rust outbreaks.",
      icon: "🌦️",
      route: "weather-monitoring"
    },
    {
      title: "Timely Field Inspection",
      description: "Regularly inspect fields to detect early signs of disease and take action.",
      icon: "🔍",
      route: "field-inspection"
    }
  ];

  const handleCardClick = (route) => {
    navigate(`/recommendation/${route}`);
  };

  return (
    <div className="recommendations-container">
      <h1>🌾 SmartRust Recommendations</h1>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Optimize your wheat farming with AI-driven insights.</p>

      <div className="recommendations-grid">
        {recommendations.map((rec, index) => (
          <div className="recommendation-card" key={index} onClick={() => handleCardClick(rec.route)}>
            <span className="rec-icon">{rec.icon}</span>
            <h3>{rec.title}</h3>
            <p>{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;