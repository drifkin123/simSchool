import React from 'react';
import '../styles/NumbersSection.css';

const stats = [
  {
    number: '20',
    label: 'Years of research'
  },
  {
    number: '1 trillion',
    label: 'Simulated student variations'
  },
  {
    number: '200,000+',
    label: 'Hours of Simulated Teaching and Learning'
  },
  {
    number: '11',
    label: 'countries'
  }
];

const NumbersSection: React.FC = () => {
  return (
    <section className="numbers-section">
      <div className="numbers-container">
        <div className="numbers-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection; 