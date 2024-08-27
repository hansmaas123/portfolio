import React from "react"
import { NavLink } from "react-router-dom";
import "../styles/style.css"

const NavBar = () => {
return (
    <div className="nav__container">
    <div className="nav__wrapper">
        <NavLink activeclassname='active' className="nav__link nav__link1" to={`/`}>Home</NavLink>
        <NavLink activeclassname='active' className="nav__link nav__link2" to={`/about`}>About</NavLink>
        <NavLink activeclassname='active' className="nav__link nav__link3" to={`/contact`}>Contact</NavLink>
    </div>
    </div>
)
}
export default NavBar