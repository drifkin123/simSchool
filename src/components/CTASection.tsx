import React from 'react';
import '../styles/CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Simulated Students. Real Results.</h2>
        <p className="cta-description">
          The simSchool Platform enables your educators to practice, reflect, and improve decision-making through unlimited simulations and continuous personalized feedback.
        </p>
        <button className="cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default CTASection; 