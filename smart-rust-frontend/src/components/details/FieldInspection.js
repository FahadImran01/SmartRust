import React, { useEffect } from 'react';
import './FieldInspection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import inspect1 from '../../assets/inspection/inspect1.png';
import inspect2 from '../../assets/inspection/inspect2.jpg';
import inspect3 from '../../assets/inspection/inspect3.jpg';
import inspect4 from '../../assets/inspection/inspect4.png';

const FieldInspection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="inspection-page">
      <header className="inspection-header" data-aos="fade-in">
        <h1>🔍 Field Inspection</h1>
        <p className="tagline">
          A critical step in early detection and control of wheat rust.
        </p>
      </header>

      <section className="inspection-section" data-aos="fade-up">
        <h2>🌾 Importance of Field Inspection</h2>
        <p>
          Regular field inspections serve as the frontline defense against wheat rust. Detecting signs early ensures timely intervention using fungicides, resistant crop varieties, or integrated disease management. Accurate field monitoring can significantly reduce yield loss and improve disease forecasting.
        </p>
      </section>

      <section className="inspection-section" data-aos="fade-up">
        <h2>🕵️ What to Look For</h2>
        <p>
          Early detection of rust symptoms is crucial. Look closely during moist and warm weather, as these are ideal conditions for rust development.
        </p>
        <ul>
          <li><strong>Rust pustules:</strong> Small orange or reddish-brown blisters, mostly on the undersides of leaves.</li>
          <li><strong>Yellowing:</strong> Initial chlorosis around infected areas.</li>
          <li><strong>Wilting & necrosis:</strong> In later stages, the leaves may curl or die prematurely.</li>
          <li><strong>Stem and sheath infections:</strong> In severe cases, the infection spreads to stems and leaf sheaths.</li>
        </ul>
        <div className="image-row">
          <img src={inspect1} alt="Inspecting wheat leaves" data-aos="zoom-in" />
          <img src={inspect2} alt="Rust pustules on leaf" data-aos="zoom-in" />
          <img src={inspect3} alt="Magnified wheat rust signs" data-aos="zoom-in" />
          <img src={inspect4} alt="Farmer inspecting wheat field" data-aos="zoom-in" />
        </div>
      </section>

      <section className="inspection-section" data-aos="fade-up">
        <h2>🧭 Inspection Methodology</h2>
        <p>
          Follow systematic walking patterns like 'W' or 'Z' to cover different sections of the field effectively. Ensure that both inner and outer zones are equally observed.
        </p>
        <ul>
          <li>Inspect in early morning or late afternoon when symptoms are more visible.</li>
          <li>Sample plants from different growth stages and soil types.</li>
          <li>Carry a field notebook or mobile app for logging observations.</li>
          <li>Use GPS to mark infected zones and create disease maps.</li>
        </ul>
      </section>

      <section className="inspection-section" data-aos="fade-up">
        <h2>📋 Best Practices</h2>
        <p>
          Consistency is key. Field inspection must be part of a routine protocol, especially during rust-favorable seasons.
        </p>
        <ul>
          <li>Use a 10x hand lens to spot early-stage rust not visible to the naked eye.</li>
          <li>Include border rows and volunteer wheat plants in checks.</li>
          <li>Inspect both leaf surfaces, especially the lower ones.</li>
          <li>Document changes weekly to identify outbreak trends.</li>
        </ul>
      </section>

      <section className="inspection-section" data-aos="fade-up">
        <h2>🔄 Integration with Disease Management</h2>
        <p>
          Field inspection alone isn’t enough. It must be integrated with:
        </p>
        <ul>
          <li><strong>Weather tracking:</strong> Use forecast data to predict high-risk rust outbreaks.</li>
          <li><strong>Resistant varieties:</strong> Deploy rust-resistant wheat strains for better protection.</li>
          <li><strong>Fungicide rotation:</strong> Combine early detection with targeted treatment for maximum effect.</li>
        </ul>
      </section>

      <footer className="inspection-footer" data-aos="fade-up">
        <p>
          Vigilance and timely inspection empower farmers to safeguard their wheat crops from devastating rust outbreaks. Stay alert, stay protected!
        </p>
      </footer>
    </div>
  );
};

export default FieldInspection;