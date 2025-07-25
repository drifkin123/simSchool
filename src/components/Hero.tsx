import { Component } from 'react';
import styles from '../styles/Hero.module.css';
import classNames from 'classnames';

class Hero extends Component {
  render() {
    return (
      <section className={styles.hero}>
        <div className={classNames('container', styles.heroContainer)}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Improve teaching effectiveness and reflective practice with 24/7 dynamic AI-informed simulations
            </h1>
            <div className={styles.heroVideo}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
              >
                <source src="/vids/home_page_header.mp4" type="video/mp4" />
              </video>
            </div>
            <p className={styles.heroSubtitle}>
              Make decisions. Receive personalized feedback. Gain real-time, custom insights
            </p>
            <p className={styles.heroDescription}>
              Learn more about the most researched and widely-used simulation platform in educator preparation and development
            </p>
            <div className={styles.heroButtons}>
              <a href="/platform" className={classNames('btn', 'btn-primary')}>About simSchool</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://calendly.com/simschool/simschool-demo-and-discussion-clone"
                className={classNames('btn', 'btn-secondary')}>
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero; 