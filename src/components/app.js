import React from "react";
import { Route, Routes } from "react-router-dom";  // For React Router v6
import IndexPage from "../pages/index";  // Your main page component
import Cv from "./Cv";  // Your CV page component
import Navbar from "../components/navbar";  // Your Navbar component

function App() {
  return (
    <div>
      <Navbar />  {/* Navbar component */}
      <Routes>  {/* Routes is used in React Router v6 */}
        <Route path="/" element={<IndexPage />} />  {/* Main page route */}
        <Route path="/cv" element={<Cv />} />  {/* CV page route */}
      </Routes>
    </div>
  );
}

export default App;
