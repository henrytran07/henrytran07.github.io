// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import React Router components
import IndexPage from "./pages/index"; // Your main page component
import Cv from "./Cv"; // Your CV page component
import Navbar from "./components/navbar"; // Your Navbar component

function App() {
  return (
    <Router basename="/henry-tran"> {/* Set the basename to the sub-directory */}
      <Navbar /> {/* Navbar is now part of the routing structure */}
      <Switch>
        {/* Define routes for different pages */}
        {/* <Route path="/" exact component={IndexPage} /> Main page */}
        <Route path="/cv" component={Cv} /> {/* CV page */}
      </Switch>
    </Router>
  );
}

export default App;
