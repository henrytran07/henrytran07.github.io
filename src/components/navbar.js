import React, { useState } from "react";
import "./Navbar.scss"; // Your styles for the navbar

const Navbar = () => {
  // State to track whether the menu is open (for mobile view)
  const [isMobile, setIsMobile] = useState(false);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">
          {/* Make "Henry Tran" logo a link to the top of the page */}
          <span onClick={scrollToTop} className="navbar__logo">
            Henry Tran
          </span>
        </div>
        {/* Mobile menu toggle button */}
        <button className="navbar__toggle" onClick={toggleMobileMenu}>
          <span className="navbar__toggle-icon"></span>
        </button>

        {/* Conditional classes for mobile menu */}
        <ul className={isMobile ? "navbar__links mobile" : "navbar__links"}>
          <li>
            <a href="#experience" className="navbar__link">Experience</a>
          </li>
          <li>
            <a href="#research" className="navbar__link">Research</a>
          </li>
          <li>
            <a href="#projects" className="navbar__link">Project</a>
          </li>
          <li>
            <a href="./henry_tran_resume.pdf" target="_blank" rel="noreferrer" className="navbar__link">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
