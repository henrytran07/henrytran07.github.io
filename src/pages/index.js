import * as React from "react";

import Seo from "../components/seo";
import Intro from "../components/intro/intro";
import "../scss/base.scss";
import "../scss/fonts.scss";
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import OtherProjects from "../components/other-projects/other-projects";
import OtherResearch from "../components/research/research";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll";
import Navbar from "../components/navbar"; 

const IndexPage = () => {
  React.useEffect(() => {
    // Apply night mode class directly when the component mounts
    document.body.classList.add('night');
  }, []); // This effect runs only once when the component is mounted

  return (
    <>
      <Navbar />
      <Scroll />
      <Seo />
      <Intro />
      <Background />
      <Experience />
      <OtherProjects />
      <OtherResearch />
      <Skills />
      <Footer />
    </>
  );
};

export default IndexPage;
