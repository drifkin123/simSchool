import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/CTE.module.css';

const CTE: React.FC = () => {
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
            description: 'An annual simSchool license is about the same cost as a consumable workbook and offers unlimited replay and use ($30 USD per user per year for unlimited use)'
        },
        {
            title: 'Personalized Automated Feedback',
            description: 'simSchool observation reports highlight the strengths users exhibit in decision-making and reveal opportunities for improvement'
        },
        {
            title: 'Transparent Reporting Fostering Quality Improvement and Targeted Mentoring',
            description: 'simSchool provides rich real-time reports and dashboards to all users – from student learners up to institutional administrators. Granular reports automatically mapped to the effectiveness frameworks institutions use enable just-in-time coaching intervention and inform continuous quality improvement.'
        },
        {
            title: 'Research Shows Learner Improvement',
            description: 'Recent research conducted at the University of North Texas revealed that CTE students who used simSchool simulations for a minimum of four hours over a semester showed measurable increases in resilience.'
        }
    ];

    return (
        <div className={styles.cteContainer}>
            <header className={styles.header}>
                <h1>Career Technical Education</h1>
                <div className={styles.intro}>
                    <p>
                        For middle and high school students exploring teaching as a CTE pathway, it is often difficult or prohibitive to provide live in-classroom observation and field experience, and frequently hands-on teaching is rare.
                    </p>
                    <p>
                        simSchool simulations provide that live engagement, giving CTE students a change to teach their own simulated students, reflect, and even develop confidence in collaborating with peers in discussing simStudent needs and teaching strategies, laying a groundwork for future participation in peer learning communities.
                    </p>
                </div>
            </header>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2>Benefits Of simSchool For Future Teaching Development and CTE Pathways</h2>
                    <p className={styles.benefitsIntro}>
                        With simSchool, career technical education programs have a convenient, safe solution for providing required field work hours and catalyzing in-class discussion.
                        For LEAs and educator preparation programs seeking an easy-to-launch, effective, strategy for enhancing teacher pipeline clubs and pathways, simSchool offers a meaningful solution.
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
                                src="/images/career-technical-education.jpg" 
                                alt="Career Technical Education" 
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
                        <p>"When high school students in Teacher Cadet clubs in Pennsylvania utilized simSchool, we found that their knowledge and understanding of the practice of teaching exceeded what we often see in our incoming undergraduates. Being actively engaged in problem-solving and decision-making forced a 'need to know' urgency that drove engagement and skills development."</p>
                        <footer>
                            <cite>Dr. Liz Azukas, East Stroudsberg University</cite>
                        </footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default CTE; 