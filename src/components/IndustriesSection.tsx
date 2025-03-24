import React from 'react';
import '../styles/IndustriesSection.css';
import '../styles/animations.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  {
    title: 'Career Technical Education',
    imageUrl: '/images/cte-bg.jpg'
  },
  {
    title: 'Education Preparation',
    imageUrl: '/images/ed-prep-bg.jpg'
  },
  {
    title: 'Field Work',
    imageUrl: '/images/field-work-bg.jpg'
  },
  {
    title: 'In-Service Educator Professional Development',
    imageUrl: '/images/prof-dev-bg.jpg'
  },
  {
    title: 'Research',
    imageUrl: '/images/research-bg.jpg'
  },
  {
    title: 'Out of School / After School Programs',
    imageUrl: '/images/after-school-bg.jpg'
  }
];

const IndustriesSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={ref} className={`industries-section fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="industries-container">
        <h2 className="industries-title">Where simSchool Works</h2>
        <p className="industries-description">
          Designed to work on any device, anywhere, any time, the simSchool platform is flexible enough to provide value and insights anywhere teaching and learning happens.
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div 
                className="industry-image"
                style={{ backgroundImage: `url(${industry.imageUrl})` }}
              />
              <h3 className="industry-title">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 