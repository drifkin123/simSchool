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
    imageUrl: '/images/career-technical-education.jpg',
    description: 'Easy-to-launch, proven strategy for enhancing teacher pipeline clubs and CTE pathways'
  },
  {
    title: 'Educator Preparation',
    imageUrl: '/images/educator-preparation.jpg',
    description: 'Cost-effective, validated tool to help candidates translate theory into practice'
  },
  {
    title: 'Field Work',
    imageUrl: '/images/fieldwork.jpg',
    description: 'Enhance field work, mitigate risk, improve candidate skill and effectiveness'
  },
  {
    title: 'In-Service Educator Professional Development',
    imageUrl: '/images/professional-development.jpg',
    description: 'Support educators where they are with engaging, on-demand, targeted PD'
  },
  {
    title: 'Research',
    imageUrl: '/images/research.jpg',
    description: 'The "flight simulator" for research in teaching and learning'
  },
  {
    title: 'Extracurricular & Afterschool Programs',
    imageUrl: '/images/extracurricular.jpg',
    description: 'Give tutors, coaches, and aids access to high quality, targeted PD'
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
              <div key={index} className={styles.industryCardWrapper}>
                <div className={styles.industryCard}>
                  <div 
                    className={styles.industryCardFront}
                    style={{ backgroundImage: `url(${industry.imageUrl})` }}
                  >
                    <h3 className={styles.industryTitle}>{industry.title}</h3>
                  </div>
                  <div className={styles.industryCardBack}>
                    <h3 className={styles.industryTitleDescription}>{industry.title}</h3>
                    <p className={styles.industryDescription}>{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(IndustriesSection); 