import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Frontend",
  "languages": ["Flutter", "Dart", "Android", "Kotlin"],
  "frameworksTitle": "Backend",
  "frameworks": ["Node.js", "Firebase", "Python", "Java - Spring"],
  "toolsTitle": "Servers",
  "tools": ["Scaling", "Serverless", "Microservice", "Monolith"],
  "designTitle": "Cloud",
  "design": ["Firebase", "Google Cloud", "AWS", "Digital Ocean"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
