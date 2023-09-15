import React from 'react'

function Header() {
  return (
    <div class="hero">
        <header class="header">
            <img class="logo" src="./images/logo.svg" alt="Logo">
            <button class="open-menu" id="open-menu">
                <i class="bi bi-list"></i>
            </button>
            <div class="mobile-menu disabled" id="mobile-menu">
                <div class="mobile-menu__header">
                    <img class="logo" src="./images/logo.svg" alt="Logo">
                    <button class="close-menu" id="close-menu">
                        <i class="bi bi-x"></i>
                    </button>
                </div>
                <nav class="mobile-menu__nav">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
  )
}

export default Header;