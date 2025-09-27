import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";  // For React Router v6
import IndexPage from "../pages/index";  // Your main page component
import Cv from "./Cv";  // Your CV page component
import Navbar from "../components/navbar";  // Your Navbar component

function App() {
  // State to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);

  // UseEffect hook to ensure this code runs only on the client side (browser)
  useEffect(() => {
    setIsBrowser(true);  // Set flag after the component mounts in the browser
  }, []);

  // Prevent rendering during SSR
  if (!isBrowser) {
    return null;
  }

  return (
    <div>
      <Navbar />  {/* Navbar component */}
      <Routes>
        <Route path="/" element={<IndexPage />} />  {/* Main page route */}
        <Route path="/henry-cv" element={<Cv />} />  {/* CV page route */}
      </Routes>
    </div>
  );
}

export default App;
