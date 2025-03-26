import React from 'react';
import styles from '../styles/IndustriesSection.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';

interface Props { }

interface IndustriesSectionProps {
  isVisible: boolean;
  hasBeenVisible: boolean;
}

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

class IndustriesSection extends React.Component<Props & IndustriesSectionProps> {
  render() {
    const { hasBeenVisible } = this.props;

    return (
      <section className={classNames(styles.industriesSection, 'fade-in-up', { visible: hasBeenVisible })}>
        <div className={styles.industriesContainer}>
          <h2 className={styles.industriesTitle}>Where simSchool Works</h2>
          <p className={styles.industriesDescription}>
            Designed to work on any device, anywhere, any time, the simSchool platform is flexible enough to provide value and insights anywhere teaching and learning happens.
          </p>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div
                  className={styles.industryImage}
                  style={{ backgroundImage: `url(${industry.imageUrl})` }}
                />
                <h3 className={styles.industryTitle}>{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(IndustriesSection); 