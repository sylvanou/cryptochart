import React, { Component } from "react";
import "./App.css";
import { Nav } from "../src/components/layout/Nav";
import Chart from "./components/Chart/Chart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="chart-container">
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
