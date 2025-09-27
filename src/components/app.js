import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";  // Assuming this is your main page
import Cv from "./Cv";  // Import the new CV page component
import Navbar from "./components/navbar";  // Import your Navbar component

function App() {
  return (
    <Router basename="/henry-tran"> {/* Set the basename to the sub-directory */}
      <Navbar /> {/* Navbar is now part of the routing structure */}
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<IndexPage />} /> {/* Main page */}
        <Route path="/cv" element={<Cv />} /> {/* CV page */}
      </Routes>
    </Router>
  );
}

export default App;
