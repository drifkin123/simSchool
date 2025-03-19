import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        {/* Add more sections here */}
      </div>
    );
  }
}

export default App;
