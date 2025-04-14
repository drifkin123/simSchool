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
            description: 'An annual simSchool license is about the same cost as a consumable workbook or technology fee ($30 USD per user per year for unlimited use)'
        },
        {
            title: 'Personalized Automated Feedback',
            description: 'simSchool observation reports highlight the strengths candidates exhibit in decision-making and reveal opportunities for improvement'
        },
        {
            title: 'Transparent Reporting Fostering Quality Improvement and Targeted Mentoring',
            description: 'simSchool provides rich real-time reports and dashboards to all users – from candidates to institutional administrators.  Granular reports automatically mapped to the effectiveness frameworks institutions use enable just-in-time coaching intervention and inform continuous quality improvement at learner, course and institutional levels.'
        },
        {
            title: 'Research Shows Learner Improvement',
            description: 'Recent research conducted at multiple institutions validates that exposure to simSchool improves knowledge of classroom management, understanding of diverse learner needs, and first-time pass rates on licensure exams.'
        }
    ];

    return (
        <div className={styles.cteContainer}>
            <header className={styles.header}>
                <h1>Educator Preparation</h1>
                <div className={styles.intro}>
                    <p>
                        For educator preparation programs, often candidates engage in coursework months or years before they will spend time in live classrooms, or even if they are placed in live environments, their access to tangible student interaction and instructional moments is limited. Concepts become conceptual rather than tangible.
                    </p>
                    <p>
                        simSchool simulations provide that tangible engagement, giving candidates a change to teach their own simulated students, reflect, and develop skill in collaborating with peers in discussing simStudent needs and teaching strategies, and implementing the strategies and concepts discussed throughout their coursework.
                    </p>
                </div>
            </header>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2>Benefits Of simSchool For Educator Preparation</h2>
                    <p className={styles.benefitsIntro}>
                        With simSchool, EPPs have a convenient, cost-effective strategy for enabling candidates to translate theory into practice, enhanced with granular, personalized feedback and data to drive continuous learning and improvement.
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
                                src="/images/educator-preparation.jpg"
                                alt="Educator Preparation"
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
                        <p>"When high school students in Teacher Cadet clubs in Pennsylvania utilized simSchool, we found that their knowledge and understanding of the practice of teaching exceeded what we often see in our incoming undergraduates. Being actively engaged in problem-solving and decision-making forced a 'need to know' urgency that drove engagement and skills development.The use of teaching simulations is a valuable tool in the preparation of future teachers in providing not only interactive observations, but providing targeted feedback to iteratively improve pedagogical and management teaching practices. As a teacher educator, I have the ability to monitor progress of my PSTs and have reflective discussions about the simulations that allowed the PSTs to think more deeply about pedagogy, classroom management, and focusing on individual learning needs."</p>
                        <footer>
                            <cite>Dr. Rhonda Christensen, University of North Texas</cite>
                        </footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default CTE; 