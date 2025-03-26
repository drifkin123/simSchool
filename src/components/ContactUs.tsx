import React from 'react';
import styles from '../styles/ContactUs.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Props { }

class ContactUs extends React.Component<Props & IntersectionObserverProps> {
  render() {
    const { hasBeenVisible } = this.props;

    return (
      <section className={classNames(styles.contactSection, 'fade-in-up', { visible: hasBeenVisible })}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Virtual Students. Real Results. Infinite Learning.</h2>
          <p className={styles.sectionDescription}>
            Give your pre-and in-service educators access to just-in-time, real-time decision-making practice and personalized feedback that improves teaching effectiveness and reflective practice at all stages of the career journey.
          </p>
          <div className={styles.contactButtonContainer}>
            <a href="#contact_us" className={classNames('btn', 'btn-primary')}>Contact Us</a>
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(ContactUs); 