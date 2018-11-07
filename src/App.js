import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './common.scss';
import {Header, HeroSection, Timeline, Statistics, Tokenomics, TokenRelease, RoadMap, Subscribe, Development, Footer} from './components';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="loader">
          <div className="position-center-center">
            <div className="ldr"></div>
          </div>
        </div> */}

        <div id="wrap">
          <Header />
          <HeroSection />

          
          <div id="content">
            <Timeline />
            <Statistics />
            <Tokenomics />
            <TokenRelease />
            <RoadMap />
            <Development />
            <Subscribe />
          </div>

          <Footer />
        </div>

        <a href="#" className="cd-top"><i className="ion-chevron-up"></i></a>
      </div>
    );
  }
}

export default App;
