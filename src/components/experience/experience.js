import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Talking Yak",
    "url": "https://talkingyak.com/",
    "time": "September 2019 - Present",
    "position": "Consulting Head of Engineering"
  },
  {
    "company": "Ather Energy",
    "url": "https://www.atherenergy.com/",
    "time": "Feb 2019 - September 2019",
    "position": "Engineering Manager"
  },
  {
    "company": "Invaria - Willow",
    "url": "https://onewillow.com/",
    "time": "March 2018 - Feb 2019",
    "position": "Senior Software Engineer"
  },
  {
    "company": "Invaria - Proxfinity",
    "url": "https://www.proxfinity.com/",
    "time": "Jan 2016 - March 2018",
    "position": "Software Engineer"
  },
  {
    "company": "TAAL Tech",
    "url": "https://www.taaltech.com/",
    "time": "June 2015 - Jan 2016",
    "position": "Software Engineer"
  },
  {
    "company": "Virtual Applets",
    "url": "https://www.crunchbase.com/organization/virtual-applets",
    "time": "Jan 2013 - June 2015",
    "position": "Co-Founder"
  },
  {
    "company": "Tringapps - HBO GO",
    "url": "https://play.google.com/store/apps/details?id=sg.hbo.hbogo&hl=en&gl=US",
    "time": "Dec 2011 - Jan 2013",
    "position": "Research Analyst"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      <a href="./kavin_varnan_resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
