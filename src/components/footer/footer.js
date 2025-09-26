import * as React from "react";
import "./footer.scss";

const socialData = [
  {
    "title": "email",
    "url": "mailto:henrytran0715@gmail.com",
    "icon": '/images/emojis/gmail_icon.png' // Assuming you downloaded email icon in SVG format
  },
  {
    "title": "github",
    "url": "https://github.com/henrytran07",
    "icon": '/images/emojis/github_icon.png'// Assuming you downloaded GitHub icon in SVG format
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/henry-tran-8b6025314/",
    "icon": '/images/emojis/linkedin_icon.png' // Assuming you downloaded LinkedIn icon in SVG format
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" key={social.title} title={social.title}>
            <img src={`./assets/icons/${social.icon}`} alt={social.title} style={{ width: "24px", height: "24px", marginRight: "8px" }} />
          </a>
        ))
      }
    </div>
    <div className="footer__copyright">
      <p>©<a href="https://henrytran07.github.io" target="_blank" rel="noreferrer">henrytran07.github.io 2025</a></p>
    </div>
  </footer>
);

export default Footer;
