import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 E-Learn. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#privacy" className="hover:text-blue-400 transition-colors">
            Privacy
          </a>
          <a href="#terms" className="hover:text-blue-400 transition-colors">
            Terms
          </a>
          <a href="#support" className="hover:text-blue-400 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;