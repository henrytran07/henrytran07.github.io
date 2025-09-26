import * as React from "react"
import Parser from 'html-react-parser';
import "./research.scss"

const researchData = [
  {
    "name": "Feedback Distillation: Teaching Lightweight to Mimic Expert Feedback in Reasoning Tasks",
    "url": "https://github.com/henrytran07/ChessGame",
    "description": " <br> <a class='small' href='https://github.com/henrytran07/ChessGame'>",
    "used": [
      {"thing": "Python"},
      {"thing": "Supervised Learning"},
      {"thing": "LLM"},
      {"thing" : "Knowledge Distillation"},
    ]
  },
]

const OtherResearch = () => (
  <section className="section other-projects">
    <div className="section__title">Research</div>
    <div className="section__content">
      {
        researchData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default OtherResearch
