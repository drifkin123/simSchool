import React, { Component } from 'react';
import styles from '../styles/Overview.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';

interface SectionProps {
    isVisible: boolean;
    hasBeenVisible: boolean;
}

class VisionMissionSection extends Component<SectionProps> {
    render() {
        const { isVisible } = this.props;
        return (
            <section className={`${styles.visionMission} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.vision}>
                    <h2>Our Vision</h2>
                    <p>A future where every educator is prepared for the full range of student learning needs, challenges, and strengths they may encounter. A future where every educator has access to personalized training when they need it, wherever they are, at a cost that makes unlimited access possible and reasonable.</p>
                </div>
                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>To provide dynamic simulations that enable educators at all stages of their professional journey to practice, to reflect, and to gain actionable personal insights that foster self-reflective practice, responsive pedagogy, and improve teaching and learning for all.</p>
                </div>
            </section>
        );
    }
}

class HistorySection extends Component<SectionProps> {
    render() {
        const { isVisible } = this.props;
        return (
            <section className={`${styles.history} ${isVisible ? styles.visible : ''}`}>
                <h2>Our History</h2>
                <p><strong>The theoretical concept for simSchool™ was born during an aspirational conversation between learning scientists and teachers from Texas and Vermont at a SITE Conference back in 2005.</strong></p>
                <p><strong>The questions were bold:</strong> was it possible to create a simulation tool that could be for teachers what <strong>flight simulators</strong> are to pilots – risk-free, data-rich environments providing just-in-time deep learning experiences and real-time, automated personalized feedback?</p>
                <p>How would you create simulated students with complex, authentic cognitive and emotional profiles? What feedback would educators need, and how much simulated decision-making would they need to do, for the experience to improve self-reflective practice, pedagogical skill, and resilience?</p>
                <p>Over the course of <strong>20 years</strong>, near continuous study around the world, over $15 million in research funding, and six major platform versions, we have clear answers to those questions as simSchool has emerged as the most widely researched and validated simulation in educator development: <strong>yes, it is possible, and, yes, using simSchool does improve educator effectiveness in real, measurable ways.</strong></p>
            </section>
        );
    }
}

class WhatUsersDoSection extends Component<SectionProps> {
    render() {
        const { isVisible } = this.props;
        return (
            <section className={`${styles.whatUsersDo} ${isVisible ? styles.visible : ''}`}>
                <h2>What Users Do</h2>
                <p><strong>simSchool Modules</strong> simulate the process teachers should use in live classrooms: plan, teach, reflect, improve.</p>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h3>Step 1</h3>
                        <p>Users are provided background information on student needs (including robust character profiles), tips and resources, on teaching, and more.</p>
                    </div>
                    <div className={styles.step}>
                        <h3>Step 2</h3>
                        <p>Users enter a simulated animated classroom and interact with simStudents who are completely autonomous agents who only react to the choices the user makes on a second by second basis.</p>
                    </div>
                    <div className={styles.step}>
                        <h3>Step 3</h3>
                        <p>Make active decisions for at least 15 minutes and then review robust personalized feedback including tracking of benchmark standards, a timeline of decision effectiveness, and insights into time spent and impact made on varied students</p>
                    </div>
                    <div className={styles.step}>
                        <h3>Step 4</h3>
                        <p>Repeat! simSchool's simulations can be engaged an infinite number of times at no charge, and the most meaningful learning occurs when users engage in rapid microteaching + feedback cycles</p>
                    </div>
                </div>
            </section>
        );
    }
}

class HowUsersImproveSection extends Component<SectionProps> {
    render() {
        const { isVisible } = this.props;
        return (
            <section className={`${styles.howUsersImprove} ${isVisible ? styles.visible : ''}`}>
                <h2>How Users Improve</h2>
                <p>Feedback is central to the simSchool experience. Institutions may choose by what professional effectiveness standards candidates and educators will be "observed" in simulations.</p>

                <div className={styles.standards}>
                    <h3>Currently available rubrics for 2024–2025 include:</h3>
                    <ul>
                        <li>InTASC</li>
                        <li>Danielson</li>
                        <li>High Leverage Teaching Practices</li>
                        <li>CEC Initial Special Education Preparation</li>
                        <li>CEC Initial Gifted Education Preparation</li>
                        <li>NAEYC Standards for Early Childhood Educators</li>
                    </ul>

                    <h3>State-Specific Standards Alignment:</h3>
                    <ul>
                        <li>California Standards for the Teaching Profession</li>
                        <li>DPAS II (Delaware)</li>
                        <li>Florida Educator Accomplished Practices (FEAPs)</li>
                        <li>Ohio Teacher Evaluation System</li>
                        <li>CPAST (Ohio)</li>
                        <li>CLASS (Louisiana)</li>
                        <li>Minnesota Standards of Effective Teaching</li>
                        <li>TIAI Revised (Mississippi)</li>
                        <li>New York State Teaching Standards</li>
                        <li>Texas Teacher Standards</li>
                        <li>Australian Professional Standards for Teachers</li>
                        <li>Australian Professional Standards for Special Education Teachers</li>
                    </ul>
                </div>

                <div className={styles.research}>
                    <h3>Independently conducted research has validated simSchool use:</h3>
                    <ul>
                        <li><strong>90 minutes of use:</strong> users improve their feelings of technology self-efficacy</li>
                        <li><strong>2-3 hours of use:</strong> users increase their understanding of varied student learning and emotional profiles</li>
                        <li><strong>4-6 hours of use:</strong> users increase knowledge of classroom management, differentiation of instruction, culturally responsive pedagogy, strategies for literacy skill-building, equitable teaching practices, and more</li>
                        <li><strong>10 hours of use:</strong> users increase first-time pass rates on licensure exams, are retained longer in pre-service education courses, are rated higher in live field work experiences, and dramatically improve their internal Locus of Control</li>
                    </ul>
                    <p className={styles.researchLink}>Visit our Research page for recently published studies.</p>
                </div>
            </section>
        );
    }
}

// Create observed versions of each section
const ObservedVisionMission = withIntersectionObserver(VisionMissionSection);
const ObservedHistory = withIntersectionObserver(HistorySection);
const ObservedWhatUsersDo = withIntersectionObserver(WhatUsersDoSection);
const ObservedHowUsersImprove = withIntersectionObserver(HowUsersImproveSection);

class Overview extends Component {
    render() {
        return (
            <div className={styles.overview}>
                <ObservedVisionMission isVisible={false} hasBeenVisible={false} />
                <ObservedHistory isVisible={false} hasBeenVisible={false} />
                <ObservedWhatUsersDo isVisible={false} hasBeenVisible={false} />
                <ObservedHowUsersImprove isVisible={false} hasBeenVisible={false} />
            </div>
        );
    }
}

export default Overview; 