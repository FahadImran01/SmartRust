import React, { useEffect } from 'react';
import './BlackRust.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import blackRustCloseup from '../../assets/BlackRust/black_rust_closeup.jpg';
import infectedField from '../../assets/BlackRust/infected_field.png';
import lifecycleDiagram from '../../assets/BlackRust/lifecycle.jpg';
import fungicideSpray from '../../assets/BlackRust/fungicide_spray.webp'; // 🔄 Make sure this image is added to your assets

const BlackRust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="black-rust-page">
      <header className="black-header" data-aos="fade-in">
        <h1>🌾 Black Rust (Stem Rust)</h1>
        <p className="black-tagline">
          A common and serious disease that affects wheat stems and leaves, leading to reduced photosynthesis and lower yields.
        </p>
      </header>

      <section className="black-section" data-aos="fade-up">
        <div className="text-column">
          <h2>What is Black Rust?</h2>
          <p>
            Black Rust, also known as Stem Rust, is caused by the fungus <i>Puccinia graminis</i>. It produces dark brown to black pustules
            on stems and leaves, weakening the plant structure and drastically affecting grain production.
          </p>
        </div>
        <div className="image-column">
          <img src={blackRustCloseup} alt="Black rust on wheat stem" className="black-image" />
        </div>
      </section>

      <section className="black-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Symptoms</h2>
          <ul>
            <li>Dark brown to black pustules on stems, leaf sheaths, and leaves.</li>
            <li>Stem weakening and breakage under heavy infection.</li>
            <li>Reduced grain filling and poor harvest quality.</li>
          </ul>
        </div>
        <div className="image-column">
          <img src={infectedField} alt="Field infected with black rust" className="black-image" />
        </div>
      </section>

      <section className="black-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Disease Cycle</h2>
          <p>
            Black Rust survives in warmer regions and spreads through windborne urediniospores. It thrives in humid, wet environments.
            Teliospores can overwinter and act as a source for new infections during the following season.
          </p>
        </div>
        <div className="image-column">
          <img src={lifecycleDiagram} alt="Black rust lifecycle diagram" className="black-image" />
        </div>
      </section>

      <section className="black-section" data-aos="fade-up">
        <h2>Management Strategies</h2>
        <ul>
          <li>Plant resistant wheat cultivars adapted to your region.</li>
          <li>Apply effective fungicides like Tebuconazole or Propiconazole at disease onset.</li>
          <li>Remove crop residues and infected volunteer plants.</li>
          <li>Use crop rotation to break the disease cycle.</li>
          <li>Monitor regularly, especially during wet and warm conditions.</li>
        </ul>
      </section>

      {/* 🛡️ Recommendation Section */}
      <section className="black-section" data-aos="fade-up">
        <div className="text-column">
          <h2>🛡️ Recommendation for Protection & Treatment</h2>
          <ul>
            <li>Conduct routine field scouting during susceptible crop stages (tillering to heading).</li>
            <li>Spray fungicides during early stem elongation (Zadoks 30–32) for effective control.</li>
            <li>Combine chemical sprays with resistant cultivars for long-term management.</li>
            <li>Integrate weather-based disease forecasting tools to time fungicide applications efficiently.</li>
            <li>Educate farmers on early warning signs and community-wide surveillance to prevent outbreaks.</li>
          </ul>
        </div>
        <div className="image-column">
          <img src={fungicideSpray} alt="Fungicide spraying for rust control" className="black-image" />
        </div>
      </section>

      <footer className="black-footer">
        <p>
          Early detection and integrated disease management practices are key to protecting your wheat crop from Black Rust.
        </p>
      </footer>
    </div>
  );
};

export default BlackRust;
