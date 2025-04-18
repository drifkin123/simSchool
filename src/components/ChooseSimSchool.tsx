import React from 'react';
import styles from '../styles/ChooseSimSchool.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Props { }

class ChooseSimSchool extends React.Component<Props & IntersectionObserverProps> {
  private benefits = [
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

  render() {
    const { hasBeenVisible } = this.props;

    return (
      <section className={classNames(styles.chooseSection, 'fade-in-up', { visible: hasBeenVisible })}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Partners Choose simSchool</h2>
          <div className={styles.benefitsGrid}>
            {this.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className={styles.benefitImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.demoButtonContainer}>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/simschool/simschool-demo-and-discussion-clone" className={classNames('btn', 'btn-primary')}>Book a Demo</a>
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(ChooseSimSchool); 