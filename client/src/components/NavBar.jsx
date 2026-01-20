import React from "react"
import { NavLink, useOutletContext, useNavigate } from "react-router-dom";
import "../styles/style.css"
import PropTypes from 'prop-types';
import { useTransition } from '../contexts/TransitionContext';

const NavBar = ({ colorIdentifier }) => {
    const context = useOutletContext();
    const setScaling = context?.setScaling || (() => {});
    const safeColorIdentifier = colorIdentifier || 'trainworld';
    const navigate = useNavigate();
    const { startTransition, endTransition } = useTransition();

    const handleNavClick = async (e, path) => {
        e.preventDefault();
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
            <div className="nav__container">
                <div className="nav__wrapper">
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, '/')} activeclassname='active' className="nav__link nav__link1" to={`/`}>Home</NavLink>
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, `/about/${safeColorIdentifier}`)} activeclassname='active' className="nav__link" to={`/about/${safeColorIdentifier}`}>About</NavLink>
                    <NavLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(e) => handleNavClick(e, `/contact/${safeColorIdentifier}`)} activeclassname='active' className="nav__link nav__link3" to={`/contact/${safeColorIdentifier}`}>Contact</NavLink>
                </div>
            </div>
    )
}
NavBar.propTypes = {
    colorIdentifier: PropTypes.string
};
export default NavBar

