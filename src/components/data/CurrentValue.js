import React, { Component } from "react";
import axios from "axios";
// import { Panel, Grid, Row, Col } from "react-bootstrap";

export class CurrentValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCrypto: props.currentCrypto,
      currentTitle: props.currentTitle,
      currentCurrency: props.currentCurrency,
      currentValue: props.currentValue
    };
  }
  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(this.state)
    // console.log('Active Language', this.state.activeLanguage)
    // if (prevProps.currentCurrency !== this.state.currentCurrency) {
    //   this.getData();
    // }
    // if (prevProps.currentCrypto !== this.state.currentCrypto) {
    //   this.getData();
    // }
    // if (prevProps.currentTitle !== this.state.currentTitle) {
    //   this.getData();
    // }
  };
  getData = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/price?fsym=${
          this.state.currentCrypto
        }&tsyms=${this.state.currentCurrency}`
      )
      .then(res => {
        this.setState({
          currentValue: res.data[this.state.currentCurrency]
        });
      });
  };
  render() {
    const style = {
      display: "flex",
      justifyContent: "space-around"
    };
    const style2 = {
      flex: "1",
      fontSize: "35px"
    };
    const style3 = {
      fontSize: "20px",
      color: "steelblue"
    };
    const style4 = {
      borderLeft: '1px solid #ccc', 
      height: "100px",
      borderRight: "1px solid rgb(218, 225, 233)",
      flex: "1",
      fontSize: "35px"
    }
   
    return (
      <div style={style}>
        <span style={style2}>
          ${this.state.currentValue}
          <p style={style3}>{this.state.currentTitle}</p>
        </span>

        <span style={style4}>
          {this.state.currentValue}
          <p style={style3}>{this.state.currentTitle}</p>
        </span>

        <span style={style2}>
          {this.state.currentValue}
          <p style={style3}>{this.state.currentTitle}</p>
        </span>

        <hr />
      </div>
    );
  }
}
