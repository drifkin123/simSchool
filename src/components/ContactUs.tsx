import React from 'react';
import styles from '../styles/ContactUs.module.css';
import '../styles/animations.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import classNames from 'classnames';

interface Props { }

interface InjectedProps {
  isVisible: boolean;
}

class ContactUs extends React.Component<Props & InjectedProps> {
  render() {
    const { isVisible } = this.props;

    return (
      <section className={classNames(styles.contactSection, 'fade-in-up', { visible: isVisible })}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Virtual Students. Real Results. Infinite Learning.</h2>
          <p className={styles.sectionDescription}>
            Give your pre-and in-service educators access to just-in-time, real-time decision-making practice and personalized feedback that improves teaching effectiveness and reflective practice at all stages of the career journey.
          </p>
          <div className={styles.contactButtonContainer}>
            <button className={styles.contactButton}>Contact Us</button>
          </div>
        </div>
      </section>
    );
  }
}

export default withIntersectionObserver(ContactUs); 