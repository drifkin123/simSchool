import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/UseCase.module.css';

const Extracirricular: React.FC = () => {
    const quoteRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        if (quoteRef.current) {
            observer.observe(quoteRef.current);
        }

        return () => {
            if (quoteRef.current) {
                observer.unobserve(quoteRef.current);
            }
        };
    }, []);

    const benefits = [
        {
            title: 'Cost-Effective',
            description: 'An annual simSchool license for educator is less than the average cost of compliance training videos and workshops'
        },
        {
            title: 'Convenient',
            description: 'simSchool simulations can be engaged anywhere, anytime, and can be customized to the specific scenario and use case than an organization requires'
        },
        {
            title: 'Personalized Automated Feedback',
            description: 'simSchool observation reports help staff consider their own decision-making and reveal insights into the learning and emotional needs of youth with varied characteristics'
        },
        {
            title: 'Transparent Reporting Fostering Quality Improvement and Targeted Mentoring',
            description: 'simSchool provides rich real-time reports and dashboards to all users – from staff to HR to administrators, providing unparalleled opportunities to observe what staff know about student learning and emotional behaviors and what additional training is required'
        }
    ];

    return (
        <div className={styles.cteContainer}>
            <header className={styles.header}>
                <h1>Extracurricular / After School Programs</h1>
                <div className={styles.intro}>
                    <p>
                        simSchool AI-informed simulations are visually situated in classroom environments, libraries, media centers, art rooms, and more. Not only do classroom educators benefit from use, but mentors, coaches, club sponsors, tutors, afterschool staff, and even caregivers – any member of a youth’s ecosystem of learning and social life — can benefit from increasing knowledge, skill, trauma-informed practice, social and emotional learning, and more.
                    </p>
                </div>
            </header>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2>Benefits Of simSchool For Extracurricular & Afterschool Programming Staff Training</h2>
                    <p className={styles.benefitsIntro}>
                        Providing all individuals in a student’s community with access to high quality, meaningful training in personalized teaching and learning strategies.
                    </p>
                    <div className={styles.twoColumnLayout}>
                        <div className={styles.benefitsColumn}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.imageColumn}>
                            <img
                                src="/images/extracurricular-and-background.jpg"
                                alt="Extracurricular & Afterschool Programming Staff Training"
                                className={styles.benefitsImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <div ref={quoteRef} className={`${styles.quoteContent} ${isVisible ? styles.visible : ''}`}>
                    <blockquote className={styles.quote}>
                        <span className={styles.quoteSymbol}>"</span>
                        <p>"This simulation gave me the opportunity to practice multiple techniques and strategies without having to worry about real life consequences. I was also able to practice with many different learning environments – so different ages and ability levels of students – and I could also focus on a specific area of need so that if I wanted to practice and analyze the effect that (my choices) have on students I could also do that within the simulation."</p>
                        <footer>
                            <cite>
                                Emily Bellrose, Central Valley of California
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default Extracirricular; 