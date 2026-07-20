import { useState, useEffect } from "react"
import { NavLink, useOutletContext, useNavigate, useLocation } from "react-router-dom";
import "../styles/style.css"
import PropTypes from 'prop-types';
import { useTransition } from '../contexts/TransitionContext';

// All colors come from the CSS theme variables set by applyTheme();
// this component only needs the identifier to build About/Contact URLs.
const NavBar = ({ colorIdentifier }) => {
    const context = useOutletContext();
    const setScaling = context?.setScaling || (() => { });
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { startTransition, endTransition } = useTransition();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentColorIdentifier, setCurrentColorIdentifier] = useState(colorIdentifier || 'trainworld');

    useEffect(() => {
        if (colorIdentifier) {
            setCurrentColorIdentifier(colorIdentifier);
        }
    }, [colorIdentifier]);

    // Follow theme changes dispatched by the homepage scroll
    useEffect(() => {
        const handleThemeChange = (event) => {
            if (event.detail?.colorIdentifier) {
                setCurrentColorIdentifier(event.detail.colorIdentifier);
            }
        };
        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, []);

    // Hide nav while scrolling down, show again when scrolling up.
    // Skipped on the homepage, where scrolling drives the project rail.
    useEffect(() => {
        if (pathname === '/') return;

        let lastScroll = 0;
        const onScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll <= 0) {
                document.body.classList.remove('scroll-down');
            } else if (currentScroll > lastScroll + 4) {
                document.body.classList.add('scroll-down');
            } else if (currentScroll < lastScroll - 4) {
                document.body.classList.remove('scroll-down');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            document.body.classList.remove('scroll-down');
        };
    }, [pathname]);

    const handleNavClick = async (e, path) => {
        e.preventDefault();
        setIsMenuOpen(false);
        await startTransition();
        navigate(path);
        window.scrollTo(0, 0);
        endTransition();
    };

    const links = [
        { label: 'Home', to: '/' },
        { label: 'About', to: `/about/${currentColorIdentifier}` },
        { label: 'Contact', to: `/contact/${currentColorIdentifier}` }
    ];

    return (
        <>
            <div className="nav__container">
                <nav className="nav__wrapper">
                    {links.map(link => (
                        <NavLink
                            key={link.label}
                            onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)}
                            onClick={(e) => handleNavClick(e, link.to)}
                            className="nav__link"
                            to={link.to}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__content">
                    {links.map(link => (
                        <NavLink
                            key={link.label}
                            onClick={(e) => handleNavClick(e, link.to)}
                            className="mobile-menu__link"
                            to={link.to}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            <button
                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </button>
        </>
    )
}

NavBar.propTypes = {
    colorIdentifier: PropTypes.string
};

export default NavBar
