import React from "react";
import Chart from "../../Chart/Chart";
import NewsContainer from "../../NewsContainer/NewsContainer";
import './CryptoTop.css';

const cryptoTop = () => (
  <div className="crypto-top">
    <Chart />
    <NewsContainer />
  </div>
);
export default cryptoTop;
