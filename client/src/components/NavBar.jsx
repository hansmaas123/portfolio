import React from "react"
import { NavLink } from "react-router-dom";
import "../styles/style.css"
import PropTypes from 'prop-types';

const NavBar = ({colorIdentifier}) => {
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

