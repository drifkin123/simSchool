import React from 'react';
import styles from '../styles/UseCase.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface QuoteSectionProps extends IntersectionObserverProps {
    quote: string;
    quoteAuthor: string;
}

class QuoteSection extends React.Component<QuoteSectionProps> {
    render() {
        return (
            <section className={styles.quoteSection}>
                <div className={`${styles.quoteContent} ${this.props.isVisible ? styles.visible : ''}`}>
                    <blockquote className={styles.quote}>
                        <span className={styles.quoteSymbol}>"</span>
                        <p>"{this.props.quote}"</p>
                        <footer>
                            <cite>{this.props.quoteAuthor}</cite>
                        </footer>
                    </blockquote>
                </div>
            </section>
        );
    }
}

const ObservedQuoteSection = withIntersectionObserver(QuoteSection, {
    threshold: 0.3, // Only trigger when 30% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Smaller negative bottom margin to trigger earlier
});

interface UseCaseProps {
    title: string;
    description: string[];
    benefitsTitle: string;
    benefitsDescription: string[];
    benefits: {
        title: string;
        description: string;
    }[];
    image: string;
    quote: string;
    quoteAuthor: string;
}

class UseCase extends React.Component<UseCaseProps> {
    render() {
        return (
            <div className={styles.cteContainer}>
                <header className={styles.header}>
                    <h1>{this.props.title}</h1>
                    <div className={styles.intro}>
                        {this.props.description.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}
                    </div>
                </header>

                <section className={styles.benefitsSection}>
                    <div className={styles.benefitsContent}>
                        <h2>{this.props.benefitsTitle}</h2>
                            {this.props.benefitsDescription.map((description, index) => (
                                <p className={styles.benefitsIntro} key={index}>{description}</p>
                            ))}
                        <div className={styles.twoColumnLayout}>
                            <div className={styles.benefitsColumn}>
                                {this.props.benefits.map((benefit, index) => (
                                    <div key={index} className={styles.benefitCard}>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.imageColumn}>
                                <img
                                    src={this.props.image}
                                    alt={this.props.title}
                                    className={styles.benefitsImage}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <ObservedQuoteSection 
                    quote={this.props.quote} 
                    quoteAuthor={this.props.quoteAuthor}
                    isVisible={false}
                    hasBeenVisible={false}
                />
            </div>
        );
    }
}

export default UseCase; 