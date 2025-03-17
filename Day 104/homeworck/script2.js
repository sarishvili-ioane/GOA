import React from 'react';

function Navbar() {
  // ნავიგაციის სექციების მასივი
  const arrNav = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', backgroundColor: '#333' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
        {arrNav.map((navItem, index) => (
          <li key={index} style={{ margin: '0 15px' }}>
            <a href={`#${navItem.toLowerCase()}`} style={{ color: '#fff', textDecoration: 'none' }}>
              {navItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
