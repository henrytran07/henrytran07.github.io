// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/index';
import About from '../pages/about'; // Import the About page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} /> {/* Home page */}
        <Route path="/about" component={About} /> {/* About page */}
      </Switch>
    </Router>
  );
}

export default App;
