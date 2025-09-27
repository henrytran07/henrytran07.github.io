// src/pages/About.js

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";

import "../scss/base.scss";
import "../scss/fonts.scss";
import "../scss/globals.scss";

const CV = () => {
    return (
        <>
        <Navbar />
        {/* <div className="cv-page">
            <h1>Henry Tran</h1>
            <p></p>
        </div> */}
        <Footer />
        </>
  );
};

export default CV;
