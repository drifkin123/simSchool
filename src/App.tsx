import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.css';
import LoopingLogos from './components/LoopingLogos';
import ChooseSimSchool from './components/ChooseSimSchool';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <LoopingLogos />
        <ChooseSimSchool />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
