import React from 'react';
import './Pricing.css';
import PricingTable from './PricingTable';
class Pricing extends React.Component {
    render() {
        return (
            <div className="pricing-container">
                <h1>simSchool Product Plans</h1>
                <div className="cards-container">

                    <div className="pricing-card">
                        <h2>Career Technical Education</h2>
                        <p className="card-description">
                            Provide your CTE students with safe, risk-free teaching experiences anytime, anywhere for the same price as a workbook
                        </p>
                        <ul className="feature-list">
                            <li>Engaging for Grades 5-12</li>
                            <li>Appropriate for in school and out of school use</li>
                            <li>Fully secure and COPPA, FERPA Compliant</li>
                            <li>WCAG Level A Compliant</li>
                            <li>Customizable to state requirements</li>
                            <li>Full data reporting for instructors and aids</li>
                            <li>200 hours of observation videos FREE</li>
                            <li>Over 300 playable simulation modules FREE</li>
                            <li>Teacher and student onboarding FREE</li>
                            <li>Researched to improve student knowledge and resilience</li>
                        </ul>
                    </div>

                    <div className="pricing-card">
                        <h2>Educator Preparation</h2>
                        <p className="card-description">
                            Weave simSchool simulations into course work to help candidates develop self-reflective skill, teaching proficiency, and resilience
                        </p>
                        <ul className="feature-list">
                            <li>Accepted by state and nationwide accreditors</li>
                            <li>FERPA, COPPA, and GDPR Compliant</li>
                            <li>WCAG Level A Compliant</li>
                            <li>Observations customizable to chosen frameworks</li>
                            <li>Full data reporting for candidates, instructors, and coordinators</li>
                            <li>200 hours of observation videos FREE</li>
                            <li>Over 300 playable simulation modules FREE</li>
                            <li>Training and onboarding FREE</li>
                            <li>Researched to improve retention, effectiveness, and licensure exam pass rates</li>
                        </ul>
                    </div>

                    <div className="pricing-card">
                        <h2>Field Work</h2>
                        <p className="card-description">
                            As a compliment or substitution for live experiences, integrate simSchool simulations to increase access and effectiveness.
                        </p>
                        <ul className="feature-list">
                            <li>Accepted by state and nationwide accreditors</li>
                            <li>Cost-effective substitution for in-classroom field observations</li>
                            <li>Ensures consistency through controlled exposure to varied learner profiles</li>
                            <li>Enables easy, risk-free targeted intervention and coaching</li>
                            <li>Provides highly accessible field work solution for candidates</li>
                            <li>Granular simSchool observations reveal tough-to-observe-live behaviors</li>
                        </ul>
                    </div>

                    <div className="pricing-card">
                        <h2>Professional Development</h2>
                        <p className="card-description">
                            Give your faculty and staff flexible, convenient training they can access when and where they like to foster improvement and growth
                        </p>
                        <ul className="feature-list">
                            <li>Cost-effective PD solution for an entire campus community</li>
                            <li>Offers just-in-time training responsive to emerging local needs</li>
                            <li>Fosters peer learning community dialogue through shared sim experiences</li>
                            <li>Gives coaches and mentors deep insights into trends and behaviors</li>
                            <li>Provides an ideal training for induction and intervention</li>
                            <li>Creates additional support for new hires with in-class teaching experience</li>
                        </ul>
                    </div>
                </div>

                <PricingTable />
            </div>
        );
    }
}

export default Pricing;