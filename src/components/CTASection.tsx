import React from 'react';
import styles from '../styles/CTASection.module.css';
import '../styles/animations.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';

interface CTASectionProps {
  isVisible: boolean;
  hasBeenVisible: boolean;
}

class CTASection extends React.Component<CTASectionProps> {
  render() {
    const { hasBeenVisible } = this.props;

    return (
      <section className={classNames(styles.ctaSection, 'fade-in-up', { visible: hasBeenVisible })}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Simulated Students. Real Results.</h2>
          <p className={styles.ctaDescription}>
            The simSchool Platform enables your educators to practice, reflect, and improve decision-making through unlimited simulations and continuous personalized feedback.
          </p>
          <a href="#contact_us" className={classNames('btn', 'btn-primary')}>Contact Us</a>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(CTASection); 