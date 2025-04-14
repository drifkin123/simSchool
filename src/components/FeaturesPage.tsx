import React from 'react';
import styles from '../styles/FeaturesPage.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Props extends IntersectionObserverProps {
    className?: string;
}

interface FeatureCardProps extends IntersectionObserverProps {
    title: string;
    description: string;
    price: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, price, hasBeenVisible }) => {
    return (
        <div className={`${styles.featureCard} ${hasBeenVisible ? styles.visible : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className={styles.price}>{price}</span>
        </div>
    );
};

const ObservedFeatureCard = withIntersectionObserver(FeatureCard);

const FeaturesPage: React.FC<Props> = ({ hasBeenVisible, className }) => {
    const features = [
        {
            title: '24/7 Web Access',
            description: 'No scheduling necessary',
            price: 'Included'
        },
        {
            title: 'Unlimited Use',
            description: 'Single per seat cost',
            price: '$30 USD per year'
        },
        {
            title: 'Module Catalog',
            description: 'Access to 400 pre-designed modules',
            price: 'FREE'
        },
        {
            title: 'Onboarding Support',
            description: 'For learners and administrators',
            price: 'FREE'
        },
        {
            title: 'Email Support',
            description: '7-day a week support',
            price: 'FREE'
        },
        {
            title: 'Technical Support',
            description: 'On-demand zoom troubleshooting and user accommodation',
            price: 'FREE'
        },
        {
            title: 'Data Analytics',
            description: 'Built-in dashboards and real-time reports',
            price: 'FREE'
        },
        {
            title: 'Custom Data Export',
            description: 'On-request data delivery',
            price: 'FREE with Enterprise license'
        },
        {
            title: 'Custom Modules',
            description: 'Custom designed modules',
            price: '$500 – $1,500'
        },
        {
            title: 'Custom Rubrics',
            description: 'Custom designed observation rubrics',
            price: '$1,500 or FREE with Enterprise license'
        }
    ];

    return (
        <section className={`${styles.featuresPage} ${hasBeenVisible ? 'visible' : ''} ${className || ''}`}>
            <div className={styles.container}>
                <div className={styles.introSection}>
                    <h1>simSchool Features</h1>
                    <p className={styles.introText}>
                        simSchool's expansive intelligence engine enables any user, anywhere, at any time, to access online modules that can be shared and socialized in synchronous and asynchronous experiences.
                    </p>
                    <p className={styles.introText}>
                        Over 10 trillion virtual learner profiles and 10 trillion virtual instructional tasks power a catalog of 400 modules available free of charge, providing limitless opportunities to explore new disciplines, refine strategies, increase knowledge and skill, and reflect on teaching and learning. Rapid authoring also enables the simSchool team to create new characters, simulations, and observations rubrics custom to the needs of partners.
                    </p>
                    <p className={styles.introText}>
                        simSchool "modules" are fully-self contained, web-based teaching and learning experiences.  They contain embedded resources (including lesson plans), reflection questions, and automated observation reports mapped to teacher preparation and effectiveness standards. Modules can be used as "practical" teaching experiences, as "observation only" experiences in which a candidate watches a video of the simulated classroom being taught (what we call a "Teach Aloud"), or both.
                    </p>
                </div>

                <div className={styles.featuresSection}>
                    <h2 className={styles.featuresTitle}>simSchool features include:</h2>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <ObservedFeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                price={feature.price}
                                isVisible={false}
                                hasBeenVisible={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withIntersectionObserver(FeaturesPage); 