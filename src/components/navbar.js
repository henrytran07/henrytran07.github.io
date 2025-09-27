import React, { useState } from "react";
import "./Navbar.scss"; // Your styles for the navbar

// Dummy components to represent pages
const Home = () => <h1></h1>;
const Experience = () => <h1></h1>;
const Skills = () => <h1></h1>;
const Research = () => <h1></h1>;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State for toggling mobile menu
  const [currentPage, setCurrentPage] = useState("home"); // State to track the current page

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Function to render pages based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "research":
        return <Research />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">
          {/* Make "Henry Tran" logo a link to the external URL */}
          <span
            onClick={() => window.location.href = "https://henrytran07.github.io/"}
            className="navbar__logo"
          >
            Henry Tran
          </span>
        </div>
        <ul className={isMobile ? "navbar__links mobile" : "navbar__links"}>
          <li>
            <a href="#experience" className="navbar__link">  {/* Pointing to the experience section */}
                Experience
            </a>
          </li>
          <li>
            <a href="#research" className="navbar__link">  {/* Pointing to the experience section */}
                Research
            </a>
          </li>
          <li>
            <a href="#skills" className="navbar__link">  {/* Pointing to the experience section */}
                Skills
            </a>
          </li>
        </ul>
        <div className="navbar__hamburger" onClick={toggleMobileMenu}>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
        </div>
      </nav>

      {/* Render the page based on the currentPage state */}
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default Navbar;
