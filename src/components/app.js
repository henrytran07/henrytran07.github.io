import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/index";
import Cv from "./Cv";
import Navbar from "../components/navbar";

function App() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Return a server-safe version during SSR
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

  // Client-side routing
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