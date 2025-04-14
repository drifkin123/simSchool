import React from 'react';
import styles from '../styles/Research.module.css';

interface ResearchStudy {
    id: number;
    title: string;
    authors: string;
    institution: string;
    year: string;
    image: string;
    pdfUrl: string;
    abstract: string;
    keywords: string[];
}

class Research extends React.Component {
    private studies: ResearchStudy[] = [
        {
            id: 1,
            title: "The Impact of an example article",
            authors: "Dr. Sarah Johnson, Dr. Michael Chen",
            institution: "Stanford University",
            year: "2023",
            image: "/images/career-technical-education.jpg",
            pdfUrl: "/research/study1.pdf",
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            keywords: ["Teacher Education", "Simulation", "Pre-Service Teachers"]
        },
        {
            id: 2,
            title: "Another example article",
            authors: "Dr. Emily Rodriguez, Dr. James Wilson",
            institution: "University of Michigan",
            year: "2023",
            image: "/images/educator-preparation.jpg",
            pdfUrl: "/research/study2.pdf",
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            keywords: ["Teaching Effectiveness", "Assessment", "Digital Tools"]
        },
        {
            id: 3,
            title: "And yet another example article",
            authors: "Dr. Lisa Thompson, Dr. Robert Kim",
            institution: "Columbia University",
            year: "2022",
            image: "/images/fieldwork.jpg",
            pdfUrl: "/research/study3.pdf",
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            keywords: ["Feedback", "Teacher Training", "Skill Development"]
        }
    ];

    render() {
        return (
            <div className={styles.researchContainer}>
                <header className={styles.header}>
                    <h1>Research</h1>
                    <p className={styles.intro}>
                        simSchool's real-time authoring, granular data collection, and robust reporting and analysis enable researchers to explore complex questions with efficiency. Internal observations and algorithms can be mapped to address specific areas of research exploration safely and often without the need to observe teachers in live classroom settings.
                    </p>
                    <blockquote className={styles.quote}>
                        <p>"(The cycles of decision-making in simSchool), experimentation and refinement directly contribute to students' development of core teaching skills aligned with the APST. In all cases, simulation informed reflective practice where students analyse their performance and outcomes, facilitating deeper understanding and continuous improvement"</p>
                        <footer>
                            <cite>Drs. Erika Spray, Natasha Kett, Nate Rutherford, Tess Rendoth, University of Newcastle</cite>
                        </footer>
                    </blockquote>
                </header>

                <section className={styles.recentStudies}>
                    <div className={styles.recentStudiesContent}>
                        <h2>Recently Published Studies</h2>
                        <div className={styles.studiesGrid}>
                            {this.studies.map((study) => (
                                <article key={study.id} className={styles.studyCard}>
                                    <div className={styles.studyImage}>
                                        <img src={study.image} alt={study.title} />
                                    </div>
                                    <div className={styles.studyContent}>
                                        <h3>{study.title}</h3>
                                        <p className={styles.authors}>{study.authors}</p>
                                        <p className={styles.institution}>{study.institution} • {study.year}</p>
                                        <p className={styles.abstract}>{study.abstract}</p>
                                        <div className={styles.keywords}>
                                            {study.keywords.map((keyword, index) => (
                                                <span key={index} className={styles.keyword}>{keyword}</span>
                                            ))}
                                        </div>
                                        <a href={study.pdfUrl} className={styles.downloadButton} target="_blank" rel="noopener noreferrer">
                                            Download PDF
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Research; 