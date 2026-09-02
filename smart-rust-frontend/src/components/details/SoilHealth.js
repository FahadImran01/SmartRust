import React, { useEffect } from 'react';
import './SoilHealth.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing images
import soilPhImage from '../../assets/SoilHealth/soil-ph.jpg';
import compostImage from '../../assets/SoilHealth/compost-application.png';
import cropRotationImage from '../../assets/SoilHealth/crop-rotation-soil.jpg';
import coverCropsImage from '../../assets/SoilHealth/cover-crops.jpg';

const SoilHealth = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="soilhealth-page">
      <div className="soilhealth-header" data-aos="fade-up">
        <h2>🧪 Soil Health Management</h2>
        <p className="tagline">Nourishing the foundation for resilient crops and sustainable yield</p>
      </div>

      <div className="soilhealth-section" data-aos="fade-up">
        <h3>Why Soil Health Matters</h3>
        <p>
          Soil is the living foundation of agriculture. Healthy soil provides essential nutrients, improves water retention, and supports beneficial microbial life that suppresses disease and promotes plant growth.
        </p>
        <ul>
          <li>Enhances nutrient availability to crops</li>
          <li>Improves crop immunity against fungal infections</li>
          <li>Reduces dependency on chemical inputs</li>
        </ul>
      </div>

      <div className="soilhealth-section" data-aos="fade-up">
        <h3>Best Practices</h3>
        <p>Follow these techniques to maintain and improve soil health:</p>
        <ul>
          <li>Maintain soil pH between 6.0 and 7.0 for optimal nutrient uptake</li>
          <li>Apply compost or well-decomposed manure to enrich organic matter</li>
          <li>Use balanced NPK fertilizers based on soil test results</li>
          <li>Rotate crops to avoid nutrient depletion and break disease cycles</li>
          <li>Practice minimal tillage to preserve soil structure</li>
          <li>Plant cover crops like legumes during off-season</li>
        </ul>
      </div>

      <div className="soilhealth-section" data-aos="fade-up">
        <h3>Visual Examples</h3>
        <div className="image-row">
          <img src={soilPhImage} alt="Soil pH management" data-aos="flip-left" />
          <img src={compostImage} alt="Compost being applied to field" data-aos="flip-left" />
          <img src={cropRotationImage} alt="Healthy soil through rotation" data-aos="flip-left" />
          <img src={coverCropsImage} alt="Cover crops enriching soil" data-aos="flip-left" />
        </div>
      </div>

      <div className="soilhealth-section" data-aos="fade-up">
        <h3>Benefits of Healthy Soil</h3>
        <ul>
          <li>Increases crop yield and quality</li>
          <li>Improves water infiltration and reduces erosion</li>
          <li>Encourages biodiversity and ecosystem balance</li>
          <li>Helps mitigate climate change by storing carbon</li>
        </ul>
      </div>

      <div className="soilhealth-footer" data-aos="fade-up">
        Healthy soil is the foundation of sustainable farming. Prioritize it today for resilient crops tomorrow.
      </div>
    </div>
  );
};

export default SoilHealth;