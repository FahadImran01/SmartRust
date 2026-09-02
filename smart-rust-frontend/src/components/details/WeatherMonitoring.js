import React, { useEffect } from 'react';
import './WeatherMonitoring.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local images
import weatherStation from '../../assets/WeatherMonitoring/weather_station.jpg';
import forecastApp from '../../assets/WeatherMonitoring/forecast_app.png';
import weatherAlert from '../../assets/WeatherMonitoring/weather_alert.jpg';

const WeatherMonitoring = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="weather-monitoring-page">
      <header className="weather-header" data-aos="fade-up">
        <h1>🌦️ Weather Monitoring</h1>
        <p className="tagline">
          Real-time weather insights for predicting and preventing wheat rust outbreaks.
        </p>
      </header>

      <section className="weather-section" data-aos="fade-up">
        <div className="container">
          <div className="datas">
            <h2>Why Weather Monitoring Matters</h2>
            <p>
              Wheat rust development is highly influenced by weather conditions—especially high humidity, leaf wetness, and temperatures between 15°C and 25°C.
              Timely monitoring allows farmers to take early action, such as applying fungicides before outbreaks occur.
            </p>
          </div>
          <div className="images">
            <img
              src={weatherStation}
              alt="Weather monitoring station"
              className="weather-image"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </section>

      <section className="weather-section" data-aos="fade-up">
        <h2>Key Weather Factors to Track</h2>
        <ul>
          <li><strong>Humidity:</strong> High relative humidity increases rust spore germination.</li>
          <li><strong>Temperature:</strong> Optimal rust growth occurs between 15°C and 25°C.</li>
          <li><strong>Leaf Wetness:</strong> Moisture on leaf surfaces accelerates infection.</li>
          <li><strong>Wind:</strong> Wind can carry rust spores across long distances.</li>
        </ul>
      </section>

      <section className="weather-section" data-aos="fade-up">
        <h2>Forecasting and Alert Tools</h2>
        <p>
          Using weather forecasting platforms and mobile alert systems enables farmers to schedule fungicide applications more efficiently and reduce unnecessary chemical use.
        </p>
        <div className="weather-tools-images">
          <img
            src={forecastApp}
            alt="Weather forecast app"
            className="weather-image"
            data-aos="flip-left"
          />
          <img
            src={weatherAlert}
            alt="Mobile weather alerts"
            className="weather-image"
            data-aos="flip-right"
          />
        </div>
      </section>

      <footer className="weather-footer" data-aos="fade-up">
        <p>
          Integrating weather data into disease management practices helps ensure timely and effective control of wheat rust.
        </p>
      </footer>
    </div>
  );
};

export default WeatherMonitoring;