import * as React from "react"
import Parser from 'html-react-parser';
import "./research.scss"

const researchData = [
  {
    "name": "Chess Game",
    "url": "https://github.com/henrytran07/ChessGame",
    "description": "Developed a fully functional chess game for 1v1 players.<br> <a class='small' href='https://github.com/henrytran07/ChessGame'>",
    "used": [
      {"thing": "C++"},
      {"thing": "Data Structure and Algorithm"},
      {"thing": "Object Oriented and Polymorphism"},
    ]
  },
  {
    "name": "Monopoly",
    "url": "https://github.com/henrytran07/Monopoly",
    "description": "Created a full functional monopoly for 4 players.<br> <a class='small' href='https://github.com/henrytran07/Monopoly'>",
    "used": [
      {"thing": "C++"},
      {"thing": "Data Structure and Algorithm"},
      {"thing": "Object Oriented and Polymorphism"},
    ]
  },
]

const OtherResearch= () => (
  <section className="section other-research">
    <div className="section__title">Research</div>
    <div className="section__content">
      {
        researchData.map((research) => (
          <div className="research">
            <div className="research__name">
              <a href={research.url} target="_blank" rel="noreferrer" className="arrow-link">{research.name}</a>
            </div>
            <p>{Parser(research.description)}</p>
            <div className="research__used">
              {
                research.used.map((research_item) => (
                  <span className="project__used__item">{research_item.thing}</span>
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
