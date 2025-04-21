import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
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
import UseCase from './components/UseCase';
import Pricing from './components/Pricing';
import Videos from './components/Videos';
import PageInProgress from './components/PageInProgress';
import styles from './styles/FloatingDemoButton.module.css';
import { institutionFeatures, learnerFeatures } from './data/features';
import { cteProps, educatorProps, extracurricularProps, fieldWorkProps, professionalDevProps } from './data/useCase';

class App extends Component {
  HomePage = () => (
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
      <a href="https://calendly.com/simschool/simschool-demo-and-discussion-clone" target="_blank" rel="noopener noreferrer" className={styles.floatingDemoButton}>
        <FaChevronRight size={24} />
        <span>Book a Demo</span>
      </a>
    </>
  );

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={this.HomePage} />
              <Route path="/overview" component={Overview} />
              <Route path="/features" component={FeaturesPage} />
              <Route path="/research" component={Research} />

              <Route path="/cte" component={() => <UseCase {...cteProps} />} />
              <Route path="/educator-prep" component={() => <UseCase {...educatorProps} />} />
              <Route path="/field-work" component={() => <UseCase {...fieldWorkProps} />} />
              <Route path="/professional-dev" component={() => <UseCase {...professionalDevProps} />} />
              <Route path="/extracurricular" component={() => <UseCase {...extracurricularProps} />} />

              <Route path="/pricing" component={Pricing} />

              <Route path="/videos" component={Videos} />
              <Route component={PageInProgress} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
