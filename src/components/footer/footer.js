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
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by&nbsp;</span>
      </div>
      <div className="bottom">
        <span>Kavin Varnan</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2024</span>
      </div>
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/henrytran07/henrytran07.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
