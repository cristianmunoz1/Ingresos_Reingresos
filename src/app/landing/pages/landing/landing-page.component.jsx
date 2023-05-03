import React from 'react';
import HomeSection from './components/home-section/home-section.component.jsx';
import LandingNavBar from './components/navbar/landing-navbar.component.jsx';

const LandingPage = () => {
  return (
    <React.Fragment>
      <LandingNavBar />
      <HomeSection />
    </React.Fragment>
  );
};

export default LandingPage;
