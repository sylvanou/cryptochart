import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import { Nav } from "../src/components/layout/Nav";
// import Background from './components/Background';
import Chart from "./components/Chart";

class App extends Component {
  state = {
    chartData: {}
  };

  // componentDidMount() {
  //   this.getData();
  // }
  // getData = () => {
  //   axios
  //     .get(
  //       "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG"
  //     )
  //     .then(res => {
  //       const cryptos = res.data;
  //       this.setState({ chartData: cryptos.Data });
  //       console.log(this.state.chartData);
  //     });
  // };

  render() {
    const styles = {
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundImage: "linear-gradient(to bottom, #0e3877, #2b71b1)"
    };
    return (
      <div style={styles} className="App">
        <Nav />
        <Chart />
      </div>
    );
  }
}

export default App;
