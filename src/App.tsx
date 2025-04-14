import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.css';
import LoopingLogos from './components/LoopingLogos';
import ChooseSimSchool from './components/ChooseSimSchool';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import IndustriesSection from './components/IndustriesSection';
import CTASection from './components/CTASection';
import stylesFeatures from './styles/Features.module.css';
import NumbersSection from './components/NumbersSection';
import Footer from './components/Footer';
import Overview from './components/Overview';
import FeaturesPage from './components/FeaturesPage';
import Research from './components/Research';
import EducatorPrep from './components/EducatorPrep';
import FieldWork from './components/FieldWork';
import ProfessionalDev from './components/ProfessionalDev';
import Extracirricular from './components/Extracirricular';
import UseCase from './components/UseCase';

function App() {
  const learnerFeatures = [
    {
      title: 'Learn',
      description: 'With over 1 trillion simulated student and hundreds of pre-designed dynamic simulations included at no charge, leaners at all stages of the career journey can practice decision-making and addressing the needs of diverse learners and classroom situations.',
      image: '/ChooseSimSchool/discussion.png'
    },
    {
      title: 'Practice',
      description: 'simSchool offers 100% asynchronous, real-time, unlimited learning. Users may access the simulations whenever they are ready to practice and learn. No need for scheduling and no limits to use. And simSchool\'s Support Team is ready and waiting to provide support 7 days a week.',
      image: '/ChooseSimSchool/feedback.png'
    },
    {
      title: 'Improve',
      description: 'In simSchool real-time feedback and personalized reports are central to the learning process. For every 15 minutes of decision-making simSchool provides observations on learner alignment to teaching effectiveness standards, student academic and emotional outcomes, and equitable practice.',
      image: '/ChooseSimSchool/observations.png'
    }
  ];

  const institutionFeatures = [
    {
      title: 'Observe',
      description: 'simSchool provides dashboards and reports for instructors, coaches, and mentors to observe the real-time progress of learners in completing content and achieving growth in benchmarked standards. No other simulation platform provides the robust reporting found in simSchool',
      image: '/ChooseSimSchool/observations.png'
    },
    {
      title: 'Report',
      description: 'Institutions use the rich, granular data available in simSchool to inform local reports and inform accreditation and state compliance.',
      image: '/ChooseSimSchool/downloadable_reports.png'
    },
    {
      title: 'Plan',
      description: 'No other simulation platform enables administrators to observe pre and in-service educator proficiency through the lenses of local, state, and national effectiveness standards. By viewing reports at the individual learner, as well as cohort and institutional level, administrators gain real-time insight into opportunities for improvement and educator development.',
      image: '/ChooseSimSchool/tested.png'
    }
  ];

  const cteProps = {
    title: "Career Technical Education",
    description: ["For middle and high school students exploring teaching as a CTE pathway, it is often difficult or prohibitive to provide live in-classroom observation and field experience, and frequently hands-on teaching is rare.", "simSchool simulations provide that live engagement, giving CTE students a change to teach their own simulated students, reflect, and even develop confidence in collaborating with peers in discussing simStudent needs and teaching strategies, laying a groundwork for future participation in peer learning communities."],
    benefitsTitle: "Benefits Of simSchool For Future Teaching Development and CTE Pathways",
    benefitsDescription: ["With simSchool, career technical education programs have a convenient, safe solution for providing required field work hours and catalyzing in-class discussion.", "For LEAs and educator preparation programs seeking an easy-to-launch, effective, strategy for enhancing teacher pipeline clubs and pathways, simSchool offers a meaningful solution."],
    benefits: [
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
    ],
    image: "/images/career-technical-education.jpg",
    quote: "When high school students in Teacher Cadet clubs in Pennsylvania utilized simSchool, we found that their knowledge and understanding of the practice of teaching exceeded what we often see in our incoming undergraduates. Being actively engaged in problem-solving and decision-making forced a 'need to know' urgency that drove engagement and skills development.",
    quoteAuthor: "Dr. Liz Azukas, East Stroudsberg University"
  }

  const HomePage = () => (
    <>
      <Hero />
      <LoopingLogos />
      <ChooseSimSchool />
      <ContactUs />
      <Features
        Title={<h2 className={stylesFeatures.sectionTitle}>What <strong>Learners</strong> do with simSchool</h2>}
        features={learnerFeatures}
      />
      <Features
        Title={<h2 className={stylesFeatures.sectionTitle}>What <strong>Institutions</strong> do with simSchool</h2>}
        features={institutionFeatures}
        className="whiteBg"
        inverse={true}
      />
      <IndustriesSection />
      <CTASection />
      <NumbersSection />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/overview" component={Overview} />
            <Route path="/features" component={FeaturesPage} />
            <Route path="/research" component={Research} />

            <Route path="/cte" component={() => <UseCase {...cteProps} />} />
            <Route path="/educator-prep" component={EducatorPrep} />
            <Route path="/field-work" component={FieldWork} />
            <Route path="/professional-dev" component={ProfessionalDev} />
            <Route path="/extracurricular" component={Extracirricular} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
