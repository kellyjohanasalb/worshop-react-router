import React from 'react';

function Header() {
  return (
    <header className="header bg-dark-gray">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <img className="w-28" src="./images/logo.svg" alt="Logo" />
        {/* Menú de navegación */}
      </div>
      
      <nav className="desktop-menu">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
