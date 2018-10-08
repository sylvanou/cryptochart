import React, { Component } from "react";
import "./App.css";
import { Nav } from "../src/components/layout/Nav";
import CryptoTop from "../src/components/layout/CryptoTop/CryptoTop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CryptoTop />
      </div>
    );
  }
}

export default App;
