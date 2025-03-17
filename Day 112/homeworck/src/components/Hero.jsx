import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-8 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Learn from the Best Online Courses
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Join our community and elevate your skills.
      </p>
      <button className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </section>
  );
};

export default Hero;