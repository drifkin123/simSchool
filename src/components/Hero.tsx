import React, { Component } from 'react';
import '../styles/Hero.css';

interface HeroState {
  currentLogoIndex: number;
}

class Hero extends Component<{}, HeroState> {
  private rotationInterval: NodeJS.Timeout | null = null;

  state: HeroState = {
    currentLogoIndex: 0
  };

  componentDidMount() {
    this.startLogoRotation();
  }

  componentWillUnmount() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  startLogoRotation = () => {
    this.rotationInterval = setInterval(() => {
      this.setState(prevState => ({
        currentLogoIndex: (prevState.currentLogoIndex + 1) % 6
      }));
    }, 3000); // Change logo every 3 seconds
  };

  render() {
    const logos = [
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=100&fit=crop',
        alt: 'University Logo 1'
      },
      {
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=100&fit=crop',
        alt: 'University Logo 2'
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop',
        alt: 'University Logo 3'
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop',
        alt: 'University Logo 4'
      },
      {
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=100&fit=crop',
        alt: 'University Logo 5'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=100&fit=crop',
        alt: 'University Logo 6'
      }
    ];

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
          <div className="hero-image">
            <h2 className="community-title">THE SIMSCHOOL GLOBAL COMMUNITY</h2>
            <div className="logo-slideshow">
              {logos.map((logo, index) => (
                <div
                  key={logo.alt}
                  className={`logo-item ${index === this.state.currentLogoIndex ? 'active' : ''}`}
                >
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
            <a 
              href="https://youtu.be/-1gOe8gPNdE?feature=shared" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="learn-more-link"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero; 