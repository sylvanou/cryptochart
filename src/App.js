import React, { Component } from "react";
import { Navigation } from "../src/components/layout/Navigation/Navigation";
import CryptoTop from "../src/components/layout/CryptoTop/CryptoTop";
import Forum from "../src/components/Forum/Forum";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={CryptoTop} />
          <Route path="/forum" exact component={Forum} />
        </div>
      </Router>
    );
  }
}

export default App;
