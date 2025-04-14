import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/UseCase.module.css';

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
            description: 'An annual simSchool license for educator is 5x less than the average cost for a PD workshop ($30 USD per user per year for unlimited use)'
        },
        {
            title: 'Personalized Automated Feedback',
            description: 'simSchool observation reports highlight the strengths candidates exhibit in decision-making and reveal opportunities for improvement in ways difficult or impractical to capture in live classroom observations'
        },
        {
            title: 'Transparent Reporting Fostering Quality Improvement and Targeted Mentoring',
            description: 'simSchool provides rich real-time reports and dashboards to all users – from educators to coaches and administrators.  Granular reports automatically mapped to the effectiveness frameworks institutions use to enable just-in-time coaching intervention and inform continuous quality improvement'
        },
        {
            title: 'Research Shows Learner Improvement',
            description: 'Recent research conducted through NSF funding indicates that teachers who use simSchool for four hours of independent, self-paced PD improved their culturally responsive pedagogy, classroom management skill, and their own live students reported an improvement in their personal feelings of belong in school after teachers did simSchool PD.'
        }
    ];

    return (
        <div className={styles.cteContainer}>
            <header className={styles.header}>
                <h1>Professional Development</h1>
                <div className={styles.intro}>
                    <p>
                        simSchool AI-informed simulations – research-validated and tested across the U.S. – can be that solution. At $30 per year per teacher for unlimited access to hundreds of hours of simulations, simSchool enables on-demand 24/7 access to educators when and where most convenient to them.
                    </p>
                </div>
            </header>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2>Benefits Of simSchool For Professional Development</h2>
                    <p className={styles.benefitsIntro}>
                        Enabling teachers to practice and reflect in a risk-free environment, enhancing confidence, skill, empathy, and adaptive-decision-making skill.
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
                                src="/images/professional-development.jpg"
                                alt="Professional Development"
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
                        <p>Samantha Norton, a Forensic Science and CCMA Instructor at Byron Nelson High School (Northwest ISD), who utilized simSchool simulations as part of a professional development program through UNT Denton, explains, “simSchool simulations encourage teachers to analyze student performance, tailor instruction, and refine their skills. This reflective process fosters deeper understanding of pedagogy, classroom management, and individual learning needs.”</p>
                        <p>She continues, “Notably, teachers I've mentored [in simSchool PD] have experienced 'eureka' moments in real classrooms, directly attributed to the simulations highlighting previously unrecognized gaps in their pedagogy, particularly in addressing students with exceptionalities.”</p>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default CTE; 