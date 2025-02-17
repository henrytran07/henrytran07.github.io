import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://passkeynotes.com/" rel="noreferrer" target="_blank">
            <img src="./images/featured/passkeynotes/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://passkeynotes.com/" rel="noreferrer" target="_blank">Passkey Notes</a>
          </div>
          <p>A Secure Notes taking app, which syncs data across all your devices and stores all the data with AES-256 encryption</p>
        </figcaption>
      </div>

      <div className="project screentime">
        <figure className="project__pic phones">
          <a href="https://play.google.com/store/apps/details?id=com.talkingyak.app" rel="noreferrer" target="_blank">
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss1.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss2.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss3.png" alt=""/>
            </div>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://play.google.com/store/apps/details?id=com.talkingyak.app" rel="noreferrer" target="_blank">Talking Yak</a>
          </div>
          <p>Talking Yak is an English learning app specifically created for Hindi and Tamil speakers.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
