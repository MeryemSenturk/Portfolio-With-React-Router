import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link nav__link--active">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link">
            About Me
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/projects" className="nav__link">
            My Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
