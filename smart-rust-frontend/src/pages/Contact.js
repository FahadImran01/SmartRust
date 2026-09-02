import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/contact/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        console.log("Feedback submitted:", result.message);
      } else {
        alert("Submission failed: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was an error sending your message.");
    }
  };
  

  return (
    <div className="contact-container">
      <h1>📩 Contact Us</h1>
      <p>We love to hear from you! Please fill out the form below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {submitted && <p className="thank-you">Thank you for contacting us!</p>}
    </div>
  );
};

export default Contact;

