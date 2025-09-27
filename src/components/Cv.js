// Cv.js
import React from "react";
import "./Cv.scss";  // Optional: Styling for the CV page

const Cv = () => {
  return (
    <div className="cv-page">
      <h1>Henry Tran</h1>
      <section>
        <h2>Electrical Engineering & Computer Science Student</h2>
        <p></p>
        <p>henrytran0715@gmail.com</p>
        <p>https://henrytran07.github.io</p>
        {/* Add more sections as needed, such as Education, Skills, Experience, etc. */}
      </section>
      {/* <section>
        <h2>Education</h2>
        <ul>
          <li>Degree: B.Sc. in Computer Science</li>
          <li>Institution: University of ABC</li>
          <li>Year: 2020 - 2024</li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>Position: Research Assistant</li>
          <li>Company: XYZ Inc.</li>
          <li>Year: 2023 - 2024</li>
        </ul>
      </section> */}
    </div>
  );
};

export default Cv;
