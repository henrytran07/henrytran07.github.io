// src/pages/About.js

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>About Me</h1>
        <p>This is a dummy about page with information about me!</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
