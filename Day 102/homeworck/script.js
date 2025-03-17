import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
