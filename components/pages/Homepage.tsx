import React from 'react';
import HeroSection from '../common/HeroSection';
import FaqSection from '../common/FaqSection';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default Homepage;
