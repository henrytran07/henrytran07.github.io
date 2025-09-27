import * as React from "react";
import "./experience.scss";

const experienceData = [
  {
    "institution": "Mount San Antonio College",
    "time": "July 2023 - May 2024",
    "position": "Undergraduate Student Researcher",
    "url": "https://www.mtsac.edu/"  
  }, 
  {
    "institution": "Algoverse",
    "time": "May 2025 - now",
    "position": "Machine Learning Researcher",
    "url": "https://algoverseairesearch.org/" 
  }, 
  {
    "institution": "Mount San Antonio College",
    "time": "August 2025 - now", 
    "position": "Programmer, Mt. SAC Robotics Team", 
    "url": "https://www.mtsac.edu/engineering/robotics.html"
  },
];

const Experience = () => (
  <section id="experience" className="section experience"> 
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data, index) => (
            <div key={index} className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.institution}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>
{/* 
      <a href="./henry_tran_resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a> */}
    </div>
  </section>
);

export default Experience;
