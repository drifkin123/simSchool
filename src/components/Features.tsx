import React from 'react';
import styles from '../styles/Features.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Feature {
  title: string;
  description: string;
  video: string;
}

interface Props {
  Title: React.ReactNode;
  features: Feature[];
  inverse?: boolean;
  className?: string;
}

interface State {
  activeFeatureButton: number;
  activeFeature: number;
  isTransitioning: boolean;
  isMobile: boolean;
}

class Features extends React.Component<Props & IntersectionObserverProps, State> {
  state: State = {
    activeFeatureButton: 0,
    activeFeature: 0,
    isTransitioning: false,
    isMobile: window.innerWidth <= 768
  };

  handleFeatureChange = (index: number) => {
    if (index === this.state.activeFeatureButton) {
      return;
    }

    this.setState({ activeFeatureButton: index, isTransitioning: true });
    setTimeout(() => {
      this.setState({ activeFeature: index, isTransitioning: false });
    }, 200); // Match this with CSS transition duration
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  render() {
    const { features, className, hasBeenVisible, Title, inverse } = this.props;
    const { activeFeatureButton, activeFeature, isTransitioning, isMobile } = this.state;

    const cardContents = ([<div key="card1" className={classNames(styles.featureText, { [styles.fadeOut]: isTransitioning, [styles.fadeIn]: !isTransitioning })}>
      <h3 className={styles.featureTitle}>{features[activeFeature].title}</h3>
      <p className={styles.featureDescription}>{features[activeFeature].description}</p>
    </div>,
    <div key="card2" className={classNames(styles.featureImage, { [styles.fadeOut]: isTransitioning, [styles.fadeIn]: !isTransitioning })}>
      <video src={features[activeFeature].video} autoPlay loop muted playsInline className={styles.featureVideo} />
    </div>])
    const cards = inverse && !isMobile ? cardContents.reverse() : cardContents;

    return (
      <section className={classNames(styles.featuresSection, 'fade-in-up', { visible: hasBeenVisible }, className ? styles[className] : '')}>
        <div className={styles.container}>
          {Title}
          <div className={styles.buttonContainer}>
            {features.map((feature, index) => (
              <button
                key={feature.title}
                className={classNames('btn-pill', { ['active']: activeFeatureButton === index })}
                onClick={() => this.handleFeatureChange(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          <div className={styles.featureContent}>
            {cards}
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(Features); 