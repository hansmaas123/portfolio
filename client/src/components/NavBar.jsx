import React from "react"
import { NavLink } from "react-router-dom";
import "../styles/style.css"
import PropTypes from 'prop-types';
const NavBar = ({ colorIdentifier }) => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= 0 && !document.querySelector('.nav__link1').classList.contains('.active')) {
            body.classList.remove("scroll-up");
            return;
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && !document.querySelector('.nav__link1').classList.contains('active')) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && body.classList.contains("scroll-down") && !document.querySelector('.nav__link1').classList.contains('active')) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });
    return (
            <div className="nav__container">
                <div className="nav__wrapper">
                    <NavLink activeclassname='active' className="nav__link nav__link1" to={`/`}>Home</NavLink>
                    <NavLink activeclassname='active' className="nav__link" to={`/about/${colorIdentifier}`}>About</NavLink>
                    <NavLink activeclassname='active' className="nav__link nav__link3" to={`/contact/${colorIdentifier}`}>Contact</NavLink>
                </div>
            </div>
    )
}
NavBar.propTypes = {
    colorIdentifier: PropTypes.string
};
export default NavBar

