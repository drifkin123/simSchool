import React, { Component } from "react";
import styles from "../styles/PricingTable.module.css";
// Define interfaces for the rows.
interface PerUserPlanRow {
    feature: string;
    // There are four columns for the per user plans.
    columns: string[];
}

interface InstitutionalLicenseRow {
    feature: string;
    value: string;
}

interface SimSchoolLicensePlansState {
    perUserPlans: PerUserPlanRow[];
    institutionalLicense: InstitutionalLicenseRow[];
}

class SimSchoolLicensePlans extends Component<{}, SimSchoolLicensePlansState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            // The Per User Plans table data.
            perUserPlans: [
                {
                    feature: "6-week cost free pilot",
                    columns: ["X", "X", "X", ""]
                },
                {
                    feature: "24/7 availability",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "7-day week support",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "Enhanced learner disabilities support",
                    // Assuming the two available marks belong to columns 3 and 4.
                    columns: ["", "", "X", "X"]
                },
                {
                    feature: "Unlimited Use",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "6 hrs included onboarding and training",
                    columns: ["X", "X", "X", ""]
                },
                {
                    feature: "Access to catalog of 300+ simulations and videos",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "Dedicated human support staff",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "simSchool-supported enrollment",
                    // (Lower-case "x" treated the same as "X")
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "IRB and grant support",
                    // Two marks, assumed in columns 3 and 4.
                    columns: ["", "", "X", "X"]
                },
                {
                    feature: "Direct interface with institutional IT Dept",
                    columns: ["X", "X", "X", "X"]
                },
                {
                    feature: "Unlimited Administrator and instructor accounts",
                    columns: ["X", "X", "X", "X"]
                },
                // Pricing row as the final row
                {
                    feature: "Price",
                    columns: [
                        "$30 per learner + $100 annual institutional fee",
                        "$30 per learner + $250 annual institutional fee",
                        "$30 per learner + $250 annual institutional fee",
                        "$25 per learner + $0 annual fee"
                    ]
                }
            ],
            // The Institutional License table data.
            institutionalLicense: [
                { feature: "24/7 availability", value: "X" },
                { feature: "7-day week support", value: "X" },
                { feature: "Unlimited Use", value: "X" },
                { feature: "6 hrs included onboarding and training", value: "X" },
                { feature: "Access to catalog of 300+ simulations and videos", value: "X" },
                { feature: "Scheduled monthly zoom in support workshops", value: "X" },
                { feature: "Dedicated human support staff", value: "X" },
                { feature: "simSchool-supported enrollment", value: "X" },
                { feature: "IRB and grant support", value: "X" },
                { feature: "Direct interface with institutional IT Dept", value: "X" },
                { feature: "First 75 learner accounts included", value: "X" },
                { feature: "Unlimited Administrator and instructor accounts", value: "X" },
                { feature: "Custom adaptations to simStudents profiles to match needs", value: "X" },
                { feature: "3 custom-authored modules", value: "X" },
                { feature: "2 custom-authored learner observation reports", value: "X" },
                { feature: "2 custom institutional data reports", value: "X" },
                { feature: "White-labeled custom login page", value: "X" },
                { feature: "Single-sign on", value: "inquire" },
                { feature: "LMS integration", value: "inquire" },
                { feature: "Volume discounts for 500+ learner accounts", value: "inquire" },
                // Pricing row
                { feature: "Price", value: "Starting at $3,000 per year" }
            ]
        };
    }

    renderPerUserPlansTable() {
        const headerColumns = [
            "Career Technical Education",
            "K-12 Professional Development",
            "Higher Education Ed Prep or Field Work",
            "Educational Research"
        ];

        const Checkmark = () => (
            <span className={styles.checkmark}>✓</span>
        );

        return (
            <div className={styles.tableContainer}>
                <h2 className={styles.tableTitle}>Per User Plans</h2>
                <p className={styles.tableDescription}>
                    Good for Rapid Setup and Integration when Additional Services and Reporting Aren't Currently Needed
                </p>
                <table className={styles.table}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th></th>
                            {headerColumns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.perUserPlans.map((row, rowIndex) => (
                            <tr key={rowIndex} className={styles.tableRow}>
                                <td className={styles.featureCell}>{row.feature}</td>
                                {row.columns.map((column, colIndex) => (
                                    <td key={colIndex} className={styles.tableCell}>
                                        {column === "X" ? <Checkmark /> : column}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    renderInstitutionalLicenseTable() {
        const Checkmark = () => (
            <span className={styles.checkmark}>✓</span>
        );

        return (
            <div className={styles.tableContainer}>
                <h2 className={styles.tableTitle}>Institutional License</h2>
                <p className={styles.tableDescription}>
                    Good for Institutions with more than 100 learners, additional tech requirements, and/or advanced instructional and reporting needs (particularly during accreditation cycles)
                </p>
                <h3 className={styles.tableTitle}>All Institutions and Organizations</h3>
                <table className={styles.table}>
                    <tbody>
                        {this.state.institutionalLicense.map((row, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <td className={styles.featureCell}>{row.feature}</td>
                                <td className={styles.tableCell}>
                                    {row.value === "X" ? <Checkmark /> : row.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <div className={styles.pricingContainer}>
                <h1>simSchool License Plans</h1>
                {this.renderPerUserPlansTable()}
                {this.renderInstitutionalLicenseTable()}
            </div>
        );
    }
}

export default SimSchoolLicensePlans;
