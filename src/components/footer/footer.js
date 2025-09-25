import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:henrytran0715@gmail.com"
  },
  {
    "title": "github",
    "url": "https://github.com/henrytran07"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/henry-tran-8b6025314/"
  },
]

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title={social.title} key={social.title}>
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
    <div className="footer__copyright">
      <p>© 2025 <a href="https://henrytran07.github.io" target="_blank" rel="noreferrer">henrytran07.github.io</a></p>
    </div>
  </footer>
)

export default Footer
