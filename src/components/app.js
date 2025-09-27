import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing from React Router v6
import IndexPage from "./pages/index"; // Your main page component
import Cv from "./Cv"; // Your CV page component
import Navbar from "./components/navbar"; // Your Navbar component

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
