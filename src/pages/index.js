import * as React from "react"

import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import Switch from "../components/switch/switch";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import OtherProjects from "../components/other-projects/other-projects";
import OtherResearch from "../components/research/research";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll";
import Navbar from "../components/navbar"; 
import ReactDOM from 'react-dom/client';  // For React 18
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from "../components/app";  // Import your main app component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in BrowserRouter to enable routing
root.render(
  <BrowserRouter basename="/henry-tran">  {/* Set the basename for GitHub Pages */}
    <App />
  </BrowserRouter>
);

const IndexPage = () => (
  <>
    <Navbar /> 
    <Scroll />
    <Seo/>
    <Switch />
    <Intro />
    <Background />
    <Experience />
    <OtherProjects />
    <OtherResearch />
    <Skills />
    <Footer />
  </>
)

export default IndexPage
