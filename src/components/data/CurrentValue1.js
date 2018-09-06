import React from "react";
// import axios from "axios";
// import { Panel, Grid, Row, Col } from "react-bootstrap";

export const CurrentValue1 = props => {
  let { currentTitle, currentCurrency, currentValue } = props;
  // console.log(currentCrypto, currentTitle, currentCurrency);
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
        {currentValue}
        <p style={style3}>{currentTitle}</p>
      </span>

      <span style={style4}>
        {currentValue}
        <p style={style3}>{currentTitle}</p>
      </span>

      <span style={style2}>
        {currentValue}
        <p style={style3}>{currentTitle}</p>
      </span>

      <hr />
    </div>
  );
};
