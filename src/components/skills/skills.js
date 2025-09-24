import * as React from "react";
import "./skills.scss";

const skillsData = {
  "backendTitle": "Programming",
  "backendframeworks": ["Python", "C++"],
  "mlTitle": "Machine Learning", 
  "mlframeworks": ["LLM", "Supervised Learning"],
  "dsTitle": "Analytics", 
  "dataScienceSkills": ["Pandas", "Matplotlib (plt)", "NumPy"],
  "roboticTitle": "Robotics", 
  "roboticSkills": ["VEX Robotics", "Autonomous Driving", "Arcade Driving", "Tank Driving"]
};

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        {/* Programming Section */}
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

        {/* Data Science Section */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.dsTitle}</div>
          <ul>
            {skillsData.dataScienceSkills.map((skill, index) => (
              <li key={index} className="skillz__category__item">{skill}</li>
            ))}
          </ul>
        </div>

        {/* Robotics Section */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.roboticTitle}</div>
          <ul>
            {skillsData.roboticSkills.map((skill, index) => (
              <li key={index} className="skillz__category__item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
