import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 shadow-md">
      <div className="text-2xl font-bold text-blue-600">E-Learn</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-blue-500 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#courses" className="hover:text-blue-500 transition-colors">
            Courses
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;