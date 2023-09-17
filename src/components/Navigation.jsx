import brandLogo from '../../images/logo.svg';
import closeIcon from '../../images/icon-close.svg'
import hamburgerIcon from '../../images/icon-hamburger.svg'

import React, { useState } from 'react'

const Navigation = () => {
    const listText = ["About", "Careers", "Events", "Products", "Support"];

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`header ${!isOpen ? "absolute" : "fixed"} lg:static`}>
            <nav className={`navigation`}>
                <div className="menu-container">
                        <a 
                        href="#" 
                        className="brand-logo">
                        <img 
                            src={brandLogo} 
                            alt="logo"
                        />
                    </a>
                    <button
                        className="hamburger-menu"
                        aria-expanded="false"
                        aria-controls="navigation-links"
                        aria-label="hamburger"
                        onClick={() => {
                            setIsOpen(!isOpen)
                            }
                        }
                        >
                        {!isOpen ? (<img src={hamburgerIcon} alt=""/>) : (<img src={closeIcon} alt="" />)}
                    </button>   
                </div>
                <div id="navigation-links" className={`nav-links-container ${!isOpen ? "sm:translate-x-[-100%]" : "sm:translate-x-0"} lg:translate-x-0`}>
                    <ul className="nav-items">
                    {
                        listText.map((item, index) => (
                        <li className="nav-item" key={index}><a className="hoverable" href="#">{item}</a></li>
                            ))
                        }

                    </ul>   
                </div>
            </nav>
        </header>
    )
}

export default Navigation;