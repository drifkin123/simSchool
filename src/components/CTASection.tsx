import React from 'react';
import '../styles/CTASection.css';
import '../styles/animations.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CTASection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={ref} className={`cta-section fade-in-up ${isVisible ? 'visible' : ''}`}>
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