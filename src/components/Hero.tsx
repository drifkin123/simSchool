import React, { Component } from 'react';
import '../styles/Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Improve teaching effectiveness and reflective practice with 24/7 dynamic AI-informed simulations
            </h1>
            <p className="hero-subtitle">
              Make decisions. Receive personalized feedback. Gain real-time, custom insights
            </p>
            <p className="hero-description">
              Learn more about the most researched and widely-used simulation platform in educator preparation and development
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">About SimSchool</a>
              <a href="#demo" className="btn btn-outline">Book a Demo</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero; 