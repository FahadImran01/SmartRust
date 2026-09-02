import React from 'react';
import './FungicideTreatment.css';

import rust1 from '../../assets/fungicide/rust1.jpg';
import rust2 from '../../assets/fungicide/rust2.jpg';
import rust3 from '../../assets/fungicide/rust3.jpg';
import rust4 from '../../assets/fungicide/rust4.png';

import fung1 from '../../assets/fungicide/fungicides1.webp';
import fung2 from '../../assets/fungicide/fungicides2.webp';
import fung3 from '../../assets/fungicide/fungicides3.webp';
import fung4 from '../../assets/fungicide/fungicides4.webp';

import app1 from '../../assets/fungicide/application1.jpg';
import app2 from '../../assets/fungicide/application2.jpeg';
import app3 from '../../assets/fungicide/application3.webp';
import app4 from '../../assets/fungicide/application4.jpg';

import safe1 from '../../assets/fungicide/safety1.gif';
import safe2 from '../../assets/fungicide/safety2.jpg';
import safe3 from '../../assets/fungicide/safety3.webp';
import safe4 from '../../assets/fungicide/safety4.png';

const FungicideTreatment = () => {
  
  return (
    <div className="fungicide-page">
      <header className="fungicide-header">
        <h1>🌿 Fungicide Treatment</h1>
        <p className="tagline">An essential part of managing wheat rust through targeted chemical solutions.</p>
      </header>

      <section className="fungicide-section">
        <h2>Why Use Fungicides?</h2>
        <p>
          Wheat rust is one of the most damaging fungal diseases affecting wheat crops worldwide. If left untreated, it can cause up to 70% yield loss, threatening food security and farmer livelihoods. Fungicides play a vital role in integrated pest management by:
        </p>
        <ul>
          <li>Preventing initial infection during early growth stages.</li>
          <li>Controlling the spread of spores across the field.</li>
          <li>Protecting future growth phases of the crop from reinfection.</li>
          <li>Boosting plant immunity when used in combination with resistant cultivars.</li>
        </ul>
        <div className="image-row">
          <img src={rust1} alt="Rust 1" />
          <img src={rust2} alt="Rust 2" />
          <img src={rust3} alt="Rust 3" />
          <img src={rust4} alt="Rust 4" />
        </div>
      </section>

      <section className="fungicide-section">
        <h2>Recommended Fungicides</h2>
        <p>
          Selecting the right fungicide is essential for effective disease control and preventing resistance buildup. The following fungicides are widely recommended for combating wheat rust:
        </p>
        <ul>
          <li>
            <strong>Propiconazole:</strong> A triazole fungicide that acts systemically within the plant to stop fungal development. Most effective when applied before rust symptoms fully appear.
          </li>
          <li>
            <strong>Tebuconazole:</strong> Offers rapid absorption and curative activity. It is highly efficient during early- to mid-growth stages.
          </li>
          <li>
            <strong>Azoxystrobin + Tebuconazole:</strong> A dual-mode fungicide that combines preventive and curative actions. Helps in delaying resistance development through multi-site targeting.
          </li>
        </ul>
        <p>
          Always consult local agricultural guidelines or agronomists for the most effective and locally approved fungicide brands and mixtures.
        </p>
        <div className="image-row">
          <img src={fung1} alt="Fungicide 1" />
          <img src={fung2} alt="Fungicide 2" />
          <img src={fung3} alt="Fungicide 3" />
          <img src={fung4} alt="Fungicide 4" />
        </div>
      </section>

      <section className="fungicide-section">
        <h2>Application Best Practices</h2>
        <p>
          Applying fungicides correctly ensures maximum protection and cost-effectiveness. Improper application can lead to environmental damage, poor disease control, or resistance. Follow these best practices:
        </p>
        <ul>
          <li>
            <strong>Early Detection:</strong> Begin application at the first sign of infection—usually yellowish to orange spots on leaves or stems.
          </li>
          <li>
            <strong>Correct Dosage:</strong> Use manufacturer-recommended concentrations to avoid under-dosing (ineffective) or overdosing (harmful).
          </li>
          <li>
            <strong>Spray Uniformly:</strong> Ensure full canopy coverage using fine nozzles and consistent pressure.
          </li>
          <li>
            <strong>Time It Right:</strong> Apply during calm weather, early in the morning or late in the afternoon to avoid evaporation or wind drift.
          </li>
          <li>
            <strong>Rotate Fungicides:</strong> Change active ingredients every season to prevent resistance development.
          </li>
        </ul>
        <div className="image-row">
          <img src={app1} alt="Application 1" />
          <img src={app2} alt="Application 2" />
          <img src={app3} alt="Application 3" />
          <img src={app4} alt="Application 4" />
        </div>
      </section>

      <section className="fungicide-section">
        <h2>Safety & Environment</h2>
        <p>
          Fungicide safety is critical for farmers, consumers, and the environment. Misuse can result in health hazards and long-term soil contamination. Always prioritize safety by:
        </p>
        <ul>
          <li>
            <strong>Wearing PPE:</strong> Always wear gloves, goggles, masks, and long clothing while mixing or spraying fungicides.
          </li>
          <li>
            <strong>Protecting the Ecosystem:</strong> Avoid spraying near water bodies or during rainfall to reduce runoff and groundwater pollution.
          </li>
          <li>
            <strong>Safe Storage:</strong> Store fungicides in a locked cabinet, away from children, livestock, and direct sunlight.
          </li>
          <li>
            <strong>Proper Disposal:</strong> Never reuse empty containers. Follow government guidelines to dispose of them at authorized collection centers.
          </li>
        </ul>
        <div className="image-row">
          <img src={safe1} alt="Safety 1" />
          <img src={safe2} alt="Safety 2" />
          <img src={safe3} alt="Safety 3" />
          <img src={safe4} alt="Safety 4" />
        </div>
      </section>

      <footer className="fungicide-footer">
        <p>
          Effective wheat rust control requires a holistic approach combining fungicides, resistant varieties, regular field scouting, and proper crop management. Stay informed, stay protected.
        </p>
      </footer>
    </div>
  );
};

export default FungicideTreatment;