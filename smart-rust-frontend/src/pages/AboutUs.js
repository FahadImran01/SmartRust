import React, { useEffect } from 'react';
import '../styles/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing images
import aboutImg from '../images/images.jpg';
import member1 from '../images/member1.jpg';
import member2 from '../images/member2.jpg';
import member3 from '../images/member3.jpg';
import brownRustImg from '../images/brown_rust.png';
import blackRustImg from '../images/black_rust.jpg';
import yellowRustImg from '../images/yellow_rust.png';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      <div className="about-hero" data-aos="fade-in">
        <h1>About SmartRust</h1>
        <p>
          SmartRust is your intelligent farming companion powered by AI, built for farmers.
          We specialize in detecting wheat diseases early and offering practical mitigation strategies.
        </p>
      </div>

      <div className="about-section-row" data-aos="fade-up">
        <div className="about-text">
          <h2>Our Vision & Mission</h2>
          <p>
            Agriculture is the backbone of our economy, and protecting crops from disease is critical to food security.
            SmartRust combines deep learning and computer vision to offer farmers an intuitive platform that diagnoses
            wheat diseases in real-time. By uploading an image, farmers receive instant disease detection and treatment
            recommendations — helping reduce losses and improve yield.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Smart Farming" />
        </div>
      </div>

      <div className="disease-info-section" data-aos="fade-up">
        <h2>Common Wheat Diseases We Detect</h2>
        <div className="disease-cards">
          <div className="disease-card" data-aos="flip-left" data-aos-delay="100">
            <img src={brownRustImg} alt="Brown Rust" />
            <h4>Brown Rust</h4>
            <p>
              A fungal disease that causes reddish-brown pustules on stems and leaves, leading to severe yield losses if untreated.
            </p>
          </div>
          <div className="disease-card" data-aos="flip-left" data-aos-delay="200">
            <img src={blackRustImg} alt="Black Rust" />
            <h4>Black Rust</h4>
            <p>
              Causes dark black spores on leaves. It reduces photosynthesis and weakens the plant — common in warm, humid climates.
            </p>
          </div>
          <div className="disease-card" data-aos="flip-left" data-aos-delay="300">
            <img src={yellowRustImg} alt="Yellow Rust" />
            <h4>Yellow Rust</h4>
            <p>
              Also known as stripe rust, this disease shows yellow streaks on leaves. It thrives in cooler environments and spreads quickly.
            </p>
          </div>
        </div>
      </div>

      <div className="team-section" data-aos="fade-up">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={member1} alt="Fahad Imran" />
            <h4>Fahad Imran</h4>
            
          </div>
          <div className="team-card" data-aos="zoom-in" data-aos-delay="200">
            <img src={member2} alt="Faseeh-ur-Rehman" />
            <h4>Faseeh-ur-Rehman</h4>
            
          </div>
          <div className="team-card" data-aos="zoom-in" data-aos-delay="300">
            <img src={member3} alt="Rehan Tariq" />
            <h4>Rehan Tariq</h4>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
