import * as React from "react";
import "./skills.scss";

const skillsData = {
  "backendTitle": "Backend",
  "backendframeworks": ["Python", "C++"],
  "mlTitle": "Machine Learning", 
  "mlframeworks": ["LLM", "Supervised Learning"],
};

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        {/* Backend Section */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.backendTitle}</div>
          <ul>
            {skillsData.backendframeworks.map((framework, index) => (
              <li key={index} className="skillz__category__item">{framework}</li>
            ))}
          </ul>
        </div>

        {/* Machine Learning Section */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.mlTitle}</div>
          <ul>
            {skillsData.mlframeworks.map((framework, index) => (
              <li key={index} className="skillz__category__item">{framework}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
