import React, { useState } from 'react';
import './Navbar.css';


//menu ko open aur close karne kai liye
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    //scrolling kai liye use kara hai
    const scrollToInfo = () => {
        const infoSection = document.querySelector('.InfoContainer');
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('.About');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToService = () => {
        const serviceSection = document.querySelector('.Service');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToGifts = () => {
        const GiftSection = document.querySelector('.ai-Form');
        if (GiftSection) {
            GiftSection.scrollIntoView({ behavior: 'smooth' });
        }
    };






    return (
        <header className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-left" onClick={scrollToInfo}>
                <h1>Parth...</h1>
            </div>
            <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
                <div className="navbar-item" onClick={scrollToInfo}>Info</div>
                <div className="navbar-item" onClick={scrollToAbout}>About</div>
                <div className="navbar-item" onClick={scrollToService}>Service</div>
                <div className="navbar-item" onClick={scrollToGifts}>Gifts</div>

            </div>
        </header>
    );
};

export default Navbar;



