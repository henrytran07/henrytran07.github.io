import * as React from "react"
import Parser from 'html-react-parser';
import "./research.scss"

const researchData = [
  {
    "name": "Feedback Distillation: Teaching Lightweight to Mimic Expert Feedback in Reasoning Tasks",
    "url": "https://github.com/henrytran07/ChessGame",
    "description": "....<br> <a class='small' href='https://github.com/henrytran07/ChessGame'>",
    "used": [
      {"thing": "Python"},
      {"thing": "Supervised Learning"},
      {"thing": "Numpy"},
      {"thing": "Pandas"},
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
                  <span className="research__used__item">{research_item.thing}</span>
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
