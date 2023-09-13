import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo-menu">
        <img className="logo" src="./images/logo.svg" alt="Logo" />
        {/* Menú de navegación */}
      </div>
      {/* Botón de menú móvil y menú móvil */}
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
