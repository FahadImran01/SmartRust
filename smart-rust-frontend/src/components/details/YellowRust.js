import React, { useEffect } from 'react';
import './YellowRust.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import yellowRustCloseup from '../../assets/YellowRust/yellow_rust_closeup.jpg';
import infectedLeaves from '../../assets/YellowRust/infected_leaves.jpg';
import lifecycleChart from '../../assets/YellowRust/lifecycle_chart.jpg';
import fungicideApplication from '../../assets/YellowRust/fungicide_application.jpg'; // Make sure to add this image

const YellowRust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="yellow-rust-page">
      <header className="yellow-header" data-aos="fade-in">
        <h1>🌾 Yellow Rust (Stripe Rust)</h1>
        <p className="tagline">
          A cool-season wheat disease that forms yellow stripes and significantly reduces crop productivity.
        </p>
      </header>

      <section className="yellow-section" data-aos="fade-up">
        <div className="text-column">
          <h2>What is Yellow Rust?</h2>
          <p>
            Yellow Rust, or Stripe Rust, is caused by the fungus <i>Puccinia striiformis</i>. It is most aggressive in cooler climates,
            appearing as narrow yellow streaks on wheat leaves and sometimes heads, impacting photosynthesis and plant growth.
          </p>
        </div>
        <div className="image-column">
          <img src={yellowRustCloseup} alt="Yellow rust on wheat leaves" className="yellow-image" />
        </div>
      </section>

      <section className="yellow-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Symptoms</h2>
          <ul>
            <li>Bright yellow linear pustules aligned along leaf veins.</li>
            <li>Premature drying and shriveling of leaves.</li>
            <li>Severe infections may reach wheat heads and glumes.</li>
          </ul>
        </div>
        <div className="image-column">
          <img src={infectedLeaves} alt="Leaves infected with yellow rust" className="yellow-image" />
        </div>
      </section>

      <section className="yellow-section" data-aos="fade-up">
        <div className="text-column">
          <h2>Disease Cycle</h2>
          <p>
            The pathogen overwinters in volunteer wheat or nearby grasses. Cool temperatures (10–15°C) and high humidity
            favor spore germination and spread. Infections begin in early growth stages and can cause major losses if untreated.
          </p>
        </div>
        <div className="image-column">
          <img src={lifecycleChart} alt="Yellow rust disease cycle" className="yellow-image" />
        </div>
      </section>

      <section className="yellow-section" data-aos="fade-up">
        <h2>Management Strategies</h2>
        <ul>
          <li>Grow resistant or tolerant wheat varieties.</li>
          <li>Apply fungicides such as Tebuconazole or Triadimefon early in infection.</li>
          <li>Remove infected crop residues and volunteer plants.</li>
          <li>Monitor fields regularly in cooler seasons.</li>
        </ul>
      </section>

      {/* 🛡️ Recommendation Treatment Section */}
      <section className="yellow-section" data-aos="fade-up">
        <div className="text-column">
          <h2>🛡️ Recommendation for Protection & Treatment</h2>
          <ul>
            <li>Use certified seeds of rust-resistant wheat cultivars suited to your agro-climate.</li>
            <li>Begin fungicide treatment at the first sign of yellow rust, especially during early tillering.</li>
            <li>Recommended fungicides: Tebuconazole, Propiconazole, or Mancozeb as a protective spray.</li>
            <li>Follow regional extension service alerts for rust outbreaks and spray schedules.</li>
            <li>Maintain field hygiene and avoid dense sowing to ensure good air flow.</li>
          </ul>
        </div>
        <div className="image-column">
          <img src={fungicideApplication} alt="Fungicide application for yellow rust" className="yellow-image" />
        </div>
      </section>

      <footer className="yellow-footer">
        <p>
          Early detection and rapid intervention can help protect your crop from severe yield losses due to Yellow Rust.
        </p>
      </footer>
    </div>
  );
};

export default YellowRust;
