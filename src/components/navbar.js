// Navbar.js
import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.scss";  // Import your custom styles for the navbar

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">
          <span className="navbar__logo">Henry Tran</span>
        </div>
        <ul className="navbar__links">
          <li>
            <a href="#projects" className="navbar__link">Projects</a>
          </li>
          <li>
            <a href="#experience" className="navbar__link">Experience</a>
          </li>
          <li>
            <a href="#research" className="navbar__link">Research</a>
          </li>
          <li>
            <a href="#skills" className="navbar__link">Skills</a>
          </li>
          <li>
            {/* Link to the CV page */}
            <Link to="/cv" className="navbar__link">CV</Link> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
