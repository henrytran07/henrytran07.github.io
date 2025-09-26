import * as React from "react";
import "./footer.scss";
import 'font-awesome/css/font-awesome.min.css';

const socialData = [
  {
    "title": "email",
    "url": "mailto:henrytran0715@gmail.com",
    "icon": "fa-envelope" // FontAwesome email icon
  },
  {
    "title": "github",
    "url": "https://github.com/henrytran07",
    "icon": "fa-github" // FontAwesome GitHub icon
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/henry-tran-8b6025314/",
    "icon": "fa-linkedin" // FontAwesome LinkedIn icon
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" key={social.title} title={social.title}>
            <i className={`fa ${social.icon}`} style={{ fontSize: "24px", marginRight: "8px" }}></i> {/* Display icon */}
          </a>
        ))
      }
    </div>
    <div className="footer__copyright">
      <p>©<a href="https://henrytran07.github.io" target="_blank" rel="noreferrer">Henry Tran 2025</a></p>
    </div>
  </footer>
);

export default Footer;
