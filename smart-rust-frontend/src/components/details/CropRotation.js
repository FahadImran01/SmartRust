import React from 'react';
import './CropRotation.css';

import crop1 from '../../assets/croprotation/crop1.avif';
import crop2 from '../../assets/croprotation/crop2.avif';
import crop3 from '../../assets/croprotation/crop3.jpg';
import crop4 from '../../assets/croprotation/crop4.jpg';

const CropRotation = () => (
  <div className="crop-rotation-page">
    <header className="crop-header">
      <h2>🔄 Crop Rotation</h2>
      <p className="tagline">
        A sustainable farming practice to break the disease cycle and enhance soil vitality.
      </p>
    </header>

    <section className="crop-section">
      <h3>Why Rotate Crops?</h3>
      <p>
        Repeated planting of wheat allows pathogens like rust fungi to survive in the soil and residue. Crop rotation introduces non-host crops like legumes, corn, or sunflower, which break the life cycle of rust and improve biodiversity.
      </p>
      <div className="image-row">
        <img src={crop1} alt="Legume rotation" />
        <img src={crop2} alt="Healthy rotated field" />
        <img src={crop3} alt="Crop rotation benefit" />
        <img src={crop4} alt="Crop variety" />
      </div>
    </section>

    <section className="crop-section">
      <h3>Best Practices</h3>
      <ul>
        <li>Rotate with legumes, oilseeds, or fallow land for at least one season.</li>
        <li>Avoid planting wheat in the same field two years in a row.</li>
        <li>Choose rotation crops that enrich soil (e.g., peas, chickpeas).</li>
        <li>Monitor weed and volunteer wheat between rotations.</li>
      </ul>
    </section>

    <footer className="crop-footer">
      <p>
        Crop rotation not only prevents wheat rust but also boosts long-term farm productivity and sustainability.
      </p>
    </footer>
  </div>
);

export default CropRotation;
