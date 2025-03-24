import React, { useState } from 'react';
import '../styles/Features.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ title, features, className }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFeatureChange = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(index);
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration
  };

  // Parse the title to handle bold text
  const renderTitle = () => {
    const parts = title.split(/<strong>|<\/strong>/);
    return (
      <h2 className="section-title">
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={index}>{part}</strong>;
          }
          return part;
        })}
      </h2>
    );
  };

  return (
    <section ref={ref} className={`features-section fade-in-up ${isVisible ? 'visible' : ''} ${className || ''}`}>
      <div className="container">
        {renderTitle()}
        <div className="feature-buttons">
          {features.map((feature, index) => (
            <button
              key={index}
              className={`feature-button ${activeFeature === index ? 'active' : ''}`}
              onClick={() => handleFeatureChange(index)}
            >
              {feature.title}
            </button>
          ))}
        </div>
        <div className="feature-content">
          <div className={`feature-text ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <h3 className="feature-title">{features[activeFeature].title}</h3>
            <p className="feature-description">{features[activeFeature].description}</p>
          </div>
          <div className={`feature-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <img src={features[activeFeature].image} alt={features[activeFeature].title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 