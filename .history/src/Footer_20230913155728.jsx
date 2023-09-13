import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-menu">
        <img className="logo" src="./images/logo.svg" alt="Logo" />
        <nav className="footer-menu">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
      </div>
      <div className="icons-copyright">
        <div className="icons">
          {/* Iconos de redes sociales */}
        </div>
        <p className="copyright">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
