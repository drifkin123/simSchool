import React from 'react';
import styles from '../styles/NumbersSection.module.css';
import '../styles/animations.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';

interface NumbersSectionProps {
  isVisible: boolean;
  hasBeenVisible: boolean;
}

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

class NumbersSection extends React.Component<NumbersSectionProps> {
  render() {
    const { hasBeenVisible } = this.props;

    return (
      <section className={classNames(styles.numbersSection, 'fade-in-up', { visible: hasBeenVisible })}>
        <div className={styles.numbersContainer}>
          <div className={styles.numbersGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(NumbersSection); 