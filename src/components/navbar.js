
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import "./Navbar.scss"; // Your styles for the navbar

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State for toggling mobile menu

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">
          Henry Tran
        </Link>
      </div>
      <ul className={isMobile ? "navbar__links mobile" : "navbar__links"}>
        <li>
          <Link to="/experience" className="navbar__link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/skills" className="navbar__link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/research" className="navbar__link">
            Research
          </Link>
        </li>
      </ul>
      <div className="navbar__hamburger" onClick={toggleMobileMenu}>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
