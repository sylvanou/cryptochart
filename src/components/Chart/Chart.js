import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { timeConverter } from "../timeConverter";
import { ChartHeader } from "../layout/ChartHeader";
import { CurrentValue } from "../CurrentValue/CurrentValue";
import "./Chart.css";

class Chart extends Component {
  state = {
    chartData: {},
    currentCrypto: "BTC",
    title: "Bitcoin",
    currentCurrency: "USD",
    historyData: "day",
    resultLimit: 10,
    aggregate: 1,
    currentValue: 0,
    high: 0,
    low: 0
  };

  componentDidMount() {
    this.getData();
    // Eventually get live data by the 2nd
    // setInterval(() => {
    //   this.getData();
    //   console.log('hello')
    // }, 60000)
  }

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('Active Language', this.state.activeLanguage)
    if (prevState.historyData !== this.state.historyData) {
      this.getData();
    }
    if (prevState.currentCurrency !== this.state.currentCurrency) {
      this.getData();
    }
    if (prevState.currentCrypto !== this.state.currentCrypto) {
      this.getData();
    }
    if (prevState.resultLimit !== this.state.resultLimit) {
      this.getData();
    }
  };

  handleSelectHistory = history => {
    this.setState({
      historyData: history
    });
  };

  handleSelectIso = iso => {
    this.setState({
      currentCurrency: iso
    });
  };
  handleSelectCrypto = (crypto, name) => {
    this.setState({
      currentCrypto: crypto,
      title: name
    });
  };
  handleSelectLimit = limit => {
    this.setState({
      resultLimit: limit
    });
  };

  getData = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histo${
          this.state.historyData
        }?fsym=${this.state.currentCrypto}&tsym=${
          this.state.currentCurrency
        }&limit=${this.state.resultLimit}&aggregate=${
          this.state.aggregate
        }&e=CCCAGG`
      )
      .then(res => {
        const cryptos = res.data;
        // console.log(cryptos);
        this.setState({
          currentValue: cryptos.Data[0].close ? cryptos.Data[0].close : 0,
          chartData: {
            labels: cryptos.Data.map(data => timeConverter(data.time)),
            datasets: [
              {
                label: "Close",
                data: cryptos.Data.map(data => data.close),
                backgroundColor: ["rgba(54, 162, 235, 0.6)"],
                borderColor: ["rgba(54, 162, 235, 0.6)"],
                pointBackgroundColor: "#fff"
              },
              {
                label: "Open",
                // fill: false,
                data: cryptos.Data.map(data => data.open),
                backgroundColor: ["rgba(153, 102, 255, 0.6)"],
                borderColor: ["rgba(153, 102, 255, 0.6)"],
                pointBackgroundColor: "#fff"
              }
            ]
          },
          high: cryptos.Data[0].high,
          low: cryptos.Data[0].low
        });
        // console.log(this.state.chartData);
      })
      .catch(err => {
        // console.log(err)
        this.setState({
          currentValue: "N/A",
          title: "N/A"
        });
      });
  };
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
    crypto: "Bitcoin"
  };

  render() {
    // const data = this.state.chartData;
    // console.log(this.props);
    console.log(Chart.defaultProps)

    // console.log(this.state.title);
    return (
      <div className="chart">
        <ChartHeader
          onSelectIso={this.handleSelectIso}
          onSelectCrypto={this.handleSelectCrypto}
          onSelectHistory={this.handleSelectHistory}
          onSelectLimit={this.handleSelectLimit}
        />
        <CurrentValue
          high={this.state.high}
          low={this.state.low}
          currentValue={this.state.currentValue}
          currentTitle={this.state.title}
          currentCurrency={this.state.currentCurrency}
          currentCrypto={this.state.currentCrypto}
        />

        <div style={{ width: "90%", margin: "0 auto" }}>
          <Line
            data={this.state.chartData}
            height={400}
            options={{
              maintainAspectRatio: false,
              title: {
                display: this.state.title,
                text: "Historic Price For " + this.state.title,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
