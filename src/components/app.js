// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index";  // Assuming this is your main page
import Cv from "./Cv";  // Import the new CV page component
import Navbar from "./components/navbar";  // Import your Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is now part of the routing structure */}
      <Switch>
        {/* Define routes for different pages */}
        <Route path="/" exact component={IndexPage} /> {/* Main page */}
        <Route path="/cv" component={Cv} /> {/* CV page */}
        {/* You can add more routes for other pages */}
      </Switch>
    </Router>
  );
}

export default App;
