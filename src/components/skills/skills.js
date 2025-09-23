import * as React from "react"
import "./skills.scss"

const skillsData = {
  "frameworksTitle": "Backend",
  "frameworks": ["Python", "C++"],
  "frameworksTiltle": "Machine Learning",
  "frameworks" : ["LLM", "Supervised Learning"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
