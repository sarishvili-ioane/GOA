import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;