import React, { useEffect } from 'react';
import './BrownRust.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import brownRustCloseup from '../../assets/BrownRust/brown_rust_closeup.jpg';
import infectedField from '../../assets/BrownRust/infected_field.png';
import lifecycleDiagram from '../../assets/BrownRust/lifecycle.png';
import treatmentImage from '../../assets/BrownRust/treatment_spray.webp'; // ✅ Add your treatment-related image here

const BrownRust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="brown-rust-page">
      <header className="brown-header" data-aos="fade-in">
        <h1>🌾 Brown Rust (Leaf Rust)</h1>
        <p className="tagline">
          A dangerous fungal disease that attacks the leaves and stems of wheat, leading to yield losses if unmanaged.
        </p>
      </header>

      <section className="brown-section" data-aos="fade-up">
        <div className="text-column">
          <h2>What is Brown Rust?</h2>
          <p>
            Brown Rust, also known as Leaf Rust, is caused by the fungus <em>Puccinia triticina</em>. It forms reddish-brown pustules
            primarily on the leaves and spikes of wheat plants and is one of the most common and widespread wheat diseases globally.
          </p>
        </div>
        <div className="image-column">
          <img src={brownRustCloseup} alt="Brown rust on wheat leaf" className="brown-image" />
        </div>
      </section>

      <section className="brown-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Symptoms</h2>
          <ul>
            <li>Small, round reddish-brown pustules on the upper surface of leaves.</li>
            <li>Premature leaf drop due to high infection levels.</li>
            <li>Weakened plant structure and reduced photosynthesis.</li>
            <li>Lower grain weight and yield reduction.</li>
          </ul>
        </div>
        <div className="image-column">
          <img src={infectedField} alt="Wheat field infected with brown rust" className="brown-image" />
        </div>
      </section>

      <section className="brown-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Disease Cycle</h2>
          <p>
            Brown Rust spores are wind-dispersed and can travel long distances. The fungus survives on volunteer wheat and other grasses.
            Favorable conditions include cool temperatures (10–20°C) and high humidity, which promote rapid spore germination and infection.
          </p>
        </div>
        <div className="image-column">
          <img src={lifecycleDiagram} alt="Brown rust lifecycle diagram" className="brown-image" />
        </div>
      </section>

      <section className="brown-section" data-aos="fade-up">
        <h2>Management Strategies</h2>
        <ul>
          <li>Use resistant wheat varieties (check regional recommendations).</li>
          <li>Apply fungicides like Propiconazole or Tebuconazole at the onset of symptoms.</li>
          <li>Practice crop rotation to reduce disease buildup in soil.</li>
          <li>Eliminate volunteer wheat plants and grassy weeds near fields.</li>
        </ul>
      </section>

      {/* 🛡️ Recommendation for Protection & Treatment */}
      <section className="brown-section brown-treatment-section" data-aos="fade-up">
        <div className="text-column">
          <h2>🛡️ Effective Treatment & Protection Methods</h2>

          <h3>🕵️ Field Monitoring</h3>
          <ul>
            <li>Inspect wheat fields weekly, especially during early growth stages.</li>
            <li>Watch for early signs: small reddish-brown pustules on the upper leaf surface.</li>
            <li>Use disease forecasting tools to assess risk and time interventions.</li>
          </ul>

          <h3>🌱 Cultural Practices</h3>
          <ul>
            <li>Use certified, disease-free seeds and avoid late planting dates.</li>
            <li>Destroy volunteer wheat and grassy weeds near cultivation areas.</li>
            <li>Practice crop rotation with non-host crops to break the disease cycle.</li>
          </ul>

          <h3>🧪 Chemical Control</h3>
          <ul>
            <li>Apply systemic fungicides such as <strong>Propiconazole</strong> or <strong>Tebuconazole</strong> at the flag leaf stage (Zadoks 32–39).</li>
            <li>Ensure good spray coverage for maximum protection, especially under humid conditions.</li>
            <li>Repeat applications may be required depending on disease pressure and weather conditions.</li>
          </ul>

          <h3>🔁 Integrated Management</h3>
          <ul>
            <li>Combine the use of resistant varieties with fungicide application.</li>
            <li>Keep detailed records of past infections to better plan future control strategies.</li>
            <li>Consult local agricultural extension services for regional best practices.</li>
          </ul>
        </div>

        <div className="image-column">
          <img src={treatmentImage} alt="Farmer spraying fungicide on wheat" className="brown-image" />
        </div>
      </section>

      <footer className="brown-footer">
        <p>
          Early identification and proactive treatment of Brown Rust can help protect your crop and ensure better yields.
        </p>
      </footer>
    </div>
  );
};

export default BrownRust;
