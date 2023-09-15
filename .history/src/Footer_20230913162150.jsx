import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo-menu">
          <img className="w-28" src="./images/logo.svg" alt="Logo" />
          {/* Menú de navegación */}
        </div>
        <div className="icons-copyright mt-4 md:mt-0">
          <div className="icons flex gap-4">
            {/* Iconos de redes sociales */}
          </div>
          <p className="copyright text-gray text-xs md:text-sm">&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

