import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/index";
import Cv from "./Cv";
import Navbar from "../components/navbar";

function App() {
  // State to track if we're in the browser (after mount)
  const [isBrowser, setIsBrowser] = useState(false);

  // UseEffect to update state after the component mounts in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // During SSR (before the app mounts), return a default version (fallback)
  if (!isBrowser) {
    return (
      <div>
        <Navbar />
        <main>
          <IndexPage />  {/* Default page during SSR */}
        </main>
      </div>
    );
  }

  // Client-side routing after the page has mounted in the browser
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/henry-cv" element={<Cv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
