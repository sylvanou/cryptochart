import React from "react";
// import axios from "axios";
// import { Panel, Grid, Row, Col } from "react-bootstrap";

export const CurrentValue1 = props => {
  let { currentTitle, currentCurrency, currentValue, high, low } = props;
  // console.log(currentValue, currentTitle, currentCurrency);
  // console.log(props);
  // let currentValue = 0;

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
    borderLeft: "1px solid #ccc",
    height: "100px",
    borderRight: "1px solid rgb(218, 225, 233)",
    flex: "1",
    fontSize: "35px"
  };

  return (
    <div style={style}>
      <span style={style2}>
        {high}
        <p style={style3}>High</p>
      </span>

      <span style={style4}>
        {currentValue}
        <p style={style3}>Current</p>
      </span>

      <span style={style2}>
        {low}
        <p style={style3}>Low</p>
      </span>

      <hr />
    </div>
  );
};
