import React from 'react';
import '../styles/ChooseSimSchool.css';
import '../styles/animations.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ChooseSimSchool = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const benefits = [
    {
      image: '/ChooseSimSchool/tested.png',
      alt: 'Research Tested Icon'
    },
    {
      image: '/ChooseSimSchool/support.png',
      alt: 'Support Icon'
    },
    {
      image: '/ChooseSimSchool/feedback.png',
      alt: 'Feedback Icon'
    },
    {
      image: '/ChooseSimSchool/available.png',
      alt: 'Availability Icon'
    },
    {
      image: '/ChooseSimSchool/discussion.png',
      alt: 'Discussion Icon'
    },
    {
      image: '/ChooseSimSchool/observations.png',
      alt: 'Observations Icon'
    },
    {
      image: '/ChooseSimSchool/reflective_practice.png',
      alt: 'Reflective Practice Icon'
    },
    {
      image: '/ChooseSimSchool/downloadable_reports.png',
      alt: 'Reports Icon'
    }
  ];

  return (
    <section ref={ref} className={`choose-section fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Why Choose SimSchool</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <img 
                src={benefit.image} 
                alt={benefit.alt}
                className="benefit-image"
              />
            </div>
          ))}
        </div>
        <div className="demo-button-container">
          <button className="demo-button">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default ChooseSimSchool; 