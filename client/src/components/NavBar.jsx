import React, { useState, useEffect } from "react"
import { NavLink, useOutletContext, useNavigate } from "react-router-dom";
import "../styles/style.css"
import PropTypes from 'prop-types';
import { useTransition } from '../contexts/TransitionContext';

// Theme colors for hamburger and mobile menu
const THEME_COLORS = {
    trainworld: { bg: '#272727', text: '#E8E661', hamburgerBg: '#efefef', hamburgerLine: '#272727' },
    mixbox: { bg: '#929948', text: '#EEEC76', hamburgerBg: '#FDFDFD', hamburgerLine: '#272727' },
    stingstitute: { bg: '#492078', text: '#FF53B7', hamburgerBg: '#FDFDFD', hamburgerLine: '#272727' },
    rotterdans: { bg: '#F0F0F0', text: '#272727', hamburgerBg: '#272727', hamburgerLine: '#FDFDFD' },
    equalmelodies: { bg: '#272727', text: '#D8595B', hamburgerBg: '#efefef', hamburgerLine: '#272727' },
    reactartistique: { bg: '#366830', text: '#FDFDFD', hamburgerBg: '#274A23', hamburgerLine: '#FDFDFD' },
    dishknob: { bg: '#FFF8F4', text: '#4C984C', hamburgerBg: '#4C984C', hamburgerLine: '#FDFDFD' },
    trimcraft: { bg: '#434321', text: '#EEEC76', hamburgerBg: '#FDFDFD', hamburgerLine: '#272727' },
    smashabutton: { bg: '#21432E', text: '#FEA500', hamburgerBg: '#FEA500', hamburgerLine: '#272727' },
    chessbase: { bg: '#7A9A57', text: '#ECEDCE', hamburgerBg: '#ECEDCE', hamburgerLine: '#272727' },
    weatherdog: { bg: '#2E3495', text: '#E69A8D', hamburgerBg: '#E69A8D', hamburgerLine: '#FDFDFD' },
    default: { bg: '#272727', text: '#EEEC76', hamburgerBg: '#efefef', hamburgerLine: '#272727' }
}

const NavBar = ({ colorIdentifier }) => {
    const context = useOutletContext();
    const setScaling = context?.setScaling || (() => {});
    const navigate = useNavigate();
    const { startTransition, endTransition } = useTransition();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentColorIdentifier, setCurrentColorIdentifier] = useState(colorIdentifier || 'trainworld');
    
    // Update when colorIdentifier prop changes (from URL)
    useEffect(() => {
        if (colorIdentifier) {
            setCurrentColorIdentifier(colorIdentifier);
        }
    }, [colorIdentifier]);
    
    // Listen for theme changes from homepage scroll
    useEffect(() => {
        const handleThemeChange = (event) => {
            if (event.detail && event.detail.colorIdentifier) {
                setCurrentColorIdentifier(event.detail.colorIdentifier);
            }
        };
        
        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, []);
    
    const themeColors = THEME_COLORS[currentColorIdentifier] || THEME_COLORS.default;

    useEffect(() => {
        // Apply theme colors to CSS variables for hamburger and mobile menu
        document.documentElement.style.setProperty('--hamburger-bg', themeColors.hamburgerBg);
        document.documentElement.style.setProperty('--hamburger-line', themeColors.hamburgerLine);
        document.documentElement.style.setProperty('--mobile-menu-bg', themeColors.bg);
        document.documentElement.style.setProperty('--mobile-menu-text', themeColors.text);
    }, [themeColors]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = async (e, path) => {
        e.preventDefault();
        setIsMenuOpen(false); // Close menu on navigation
        await startTransition();
        navigate(path);
        window.scrollTo(0, 0);
        endTransition();
    };

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= 0 && !document.querySelector('.nav__link1').classList.contains('.active') && !document.querySelector('.nav__link3').classList.contains('.active')) {
            body.classList.remove("scroll-up");
            return;
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && !document.querySelector('.nav__link1').classList.contains('active') && !document.querySelector('.nav__link3').classList.contains('.active')) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && body.classList.contains("scroll-down") && !document.querySelector('.nav__link1').classList.contains('active') && !document.querySelector('.nav__link3').classList.contains('.active')) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        } 
        lastScroll = currentScroll;
    });

    return (
            <>
            <div className="nav__container">
                {/* Hamburger Icon for Mobile */}
                <button 
                    className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    onMouseEnter={() => setScaling(true)}
                    onMouseLeave={() => setScaling(false)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </button>

                {/* Desktop Navigation */}
                <div className="nav__wrapper">
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, '/')} activeclassname='active' className="nav__link nav__link1" to={`/`}>Home</NavLink>
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, `/about/${currentColorIdentifier}`)} activeclassname='active' className="nav__link" to={`/about/${currentColorIdentifier}`}>About</NavLink>
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, `/contact/${currentColorIdentifier}`)} activeclassname='active' className="nav__link nav__link3" to={`/contact/${currentColorIdentifier}`}>Contact</NavLink>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__content">
                    <NavLink 
                        onMouseEnter={() => setScaling(true)}
                        onMouseLeave={() => setScaling(false)} 
                        onClick={(e) => handleNavClick(e, '/')} 
                        activeclassname='active' 
                        className="mobile-menu__link" 
                        to={`/`}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        onMouseEnter={() => setScaling(true)}
                        onMouseLeave={() => setScaling(false)} 
                        onClick={(e) => handleNavClick(e, `/about/${currentColorIdentifier}`)} 
                        activeclassname='active' 
                        className="mobile-menu__link" 
                        to={`/about/${currentColorIdentifier}`}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        onMouseEnter={() => setScaling(true)}
                        onMouseLeave={() => setScaling(false)} 
                        onClick={(e) => handleNavClick(e, `/contact/${currentColorIdentifier}`)} 
                        activeclassname='active' 
                        className="mobile-menu__link" 
                        to={`/contact/${currentColorIdentifier}`}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            </>
    )
}
NavBar.propTypes = {
    colorIdentifier: PropTypes.string
};
export default NavBar

