import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Chess Game",
    "url": "https://github.com/henrytran07/ChessGame",
    "description": "I developed a fully functional chess game for 1v1 players.<br> <a class='small' href='https://github.com/henrytran07/ChessGame'>",
    "used": [
      {"thing": "C++"},
      {"thing": "Data Structure and Algorithm"},
      {"thing": "Object Oriented and Polymorphism"},
    ]
  },
  {
    "name": "Monopoly",
    "url": "https://github.com/henrytran07/Monopoly",
    "description": "I developed a full functional monopoly for 4 players.<br> <a class='small' href='https://github.com/henrytran07/Monopoly'>",
    "used": [
      {"thing": "C++"},
      {"thing": "Data Structure and Algorithm"},
      {"thing": "Object Oriented and Polymorphism"},
    ]
  },
]

const OtherProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
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

export default OtherProjects
