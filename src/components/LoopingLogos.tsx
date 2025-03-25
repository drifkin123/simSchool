import React from 'react';
import styles from '../styles/LoopingLogos.module.css';
import '../styles/animations.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';

interface Props { }

interface InjectedProps {
  isVisible: boolean;
}

class LoopingLogos extends React.Component<Props & InjectedProps> {
  private logos = [
    <img src="/logos/mcdonalds.svg" alt="McDonald's" key="McDonald's" />,
    <img src="/logos/jordan.svg" alt="Jordan" key="Jordan" />,
    <img src="/logos/aws.svg" alt="AWS" key="AWS" />,
    <img src="/logos/spotify.svg" alt="Spotify" key="Spotify" />,
    <img src="/logos/burger-king.svg" alt="Burger King" key="Burger King" />,
    <img src="/logos/honda.svg" alt="Honda" key="Honda" />,
    <img src="/logos/notion.svg" alt="Notion" key="Notion" />,
    <img src="/logos/hulu.svg" alt="Hulu" key="Hulu" />,
  ];

  render() {
    const { isVisible } = this.props;

    return (
      <div className={classNames('fade-in-up', { visible: isVisible })}>
        <h3 className={styles.title}>The SimSchool Global Community</h3>

        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <article className={styles.wrapper}>
              <div className={styles.marquee}>
                <div className={styles.marqueeGroup}>{this.logos}</div>
                <div aria-hidden="true" className={styles.marqueeGroup}>{this.logos}</div>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.logoLinkWrapper}>
          <a
            href="https://youtu.be/-1gOe8gPNdE?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(LoopingLogos);
