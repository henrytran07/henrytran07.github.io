// src/pages/About.js

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";

import "../scss/base.scss";
import "../scss/fonts.scss";
import "../scss/globals.scss";

const CV = () => {
    React.useEffect(() => {
        // Apply night mode class directly when the component mounts
        document.body.classList.add('night');
      }, []); // This effect runs only once when the component is mounted

    return (
        <>
        <Navbar />
        <div className="cv-page">
            <h1>Henry Tran</h1>
            <p></p>
        </div>
        <Footer />
        </>
  );
};

export default CV;
