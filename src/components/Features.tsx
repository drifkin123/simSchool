import React from 'react';
import styles from '../styles/Features.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Props {
  Title: React.ReactNode;
  features: Feature[];
  className?: string;
}

interface State {
  activeFeature: number;
  isTransitioning: boolean;
}

class Features extends React.Component<Props & IntersectionObserverProps, State> {
  state: State = {
    activeFeature: 0,
    isTransitioning: false
  };

  handleFeatureChange = (index: number) => {
    this.setState({ isTransitioning: true });
    setTimeout(() => {
      this.setState({ activeFeature: index, isTransitioning: false });
    }, 300); // Match this with CSS transition duration
  };

  render() {
    const { features, className, hasBeenVisible, Title } = this.props;
    const { activeFeature, isTransitioning } = this.state;

    return (
      <section className={classNames(styles.featuresSection, 'fade-in-up', { visible: hasBeenVisible }, className)}>
        <div className={styles.container}>
          {Title}
          <div className={styles.featureButtons}>
            {features.map((feature, index) => (
              <button
                key={index}
                className={classNames(styles.featureButton, { active: activeFeature === index })}
                onClick={() => this.handleFeatureChange(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          <div className={styles.featureContent}>
            <div className={classNames(styles.featureText, { fadeOut: isTransitioning, fadeIn: !isTransitioning })}>
              <h3 className={styles.featureTitle}>{features[activeFeature].title}</h3>
              <p className={styles.featureDescription}>{features[activeFeature].description}</p>
            </div>
            <div className={classNames(styles.featureImage, { fadeOut: isTransitioning, fadeIn: !isTransitioning })}>
              <img src={features[activeFeature].image} alt={features[activeFeature].title} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(Features); 