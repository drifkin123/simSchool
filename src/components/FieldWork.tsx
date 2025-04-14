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
            description: 'An annual simSchool license is about the same cost as a consumable workbook or technology fee ($30 USD per user per year for unlimited use)'
        },
        {
            title: 'Personalized Automated Feedback',
            description: 'simSchool observation reports highlight the strengths candidates exhibit in decision-making and reveal opportunities for improvement'
        },
        {
            title: 'Transparent Reporting Fostering Quality Improvement and Targeted Mentoring',
            description: 'simSchool provides rich real-time reports and dashboards to all users – from candidates to instructors and field coordiantors.  Granular reports automatically mapped to the effectiveness frameworks institutions use enable just-in-time coaching intervention and inform continuous quality improvement at learner, course and institutional levels.'
        },
        {
            title: 'Research Shows Learner Improvement',
            description: 'Recent research conducted at multiple institutions validates that exposure to simSchool improves knowledge of classroom management, understanding of diverse learner needs, and increases retention in the profession'
        }
    ];

    return (
        <div className={styles.cteContainer}>
            <header className={styles.header}>
                <h1>Field Work</h1>
                <div className={styles.intro}>
                    <p>
                        For educator preparation programs, placing candidates in field work experiences that ensure consistent exposure to varied learners and diverse conditions can be challenging and, in the case of natural disasters and other unforeseen health and other circumstances, impossible or prohibitively challenging.
                    </p>
                    <p>
                        simSchool simulations provide that predictable, easy-to-access, quality-controlled experience that, minute for minute, can be tracked as verified field hours. Not only can this provide a valuable time and cost-saving alternative or compliment to live field work, but simSchool’s robust and transparent personalized data reports give field coordinators a tool for discussion and targeted coaching with candidates.
                    </p>
                </div>
            </header>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2>Benefits Of simSchool For Field Work</h2>
                    <p className={styles.benefitsIntro}>
                        With simSchool, EPPs have a convenient, cost-effective strategy for enhancing candidate field work that mitigates risk, improves personalized data, and supports the observation process.
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
                                src="/images/fieldwork.jpg"
                                alt="Field Work"
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
                        <p>"The benefit of simSchool is measurable. Its ability to focus pre-service teachers on the importance of decision making that links theory and practice is at the core of its implementation. It highlights the importance of evidence-based decision making in all aspects of teaching."</p>
                        <footer>
                            <cite>Professor Susan Ledger, Dean of Education, University of Newcastle</cite>
                        </footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
};

export default CTE; 