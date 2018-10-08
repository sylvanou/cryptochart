import React, { Component } from "react";
import API_KEY from "../../../src/keys/keys";
import axios from "axios";
import NewsList from "./NewsList/NewsList";
import './NewsContainer.css';

export default class NewsContainer extends Component {
  state = {
    news: []
  };
  componentDidMount = () => {
    this.getNews(API_KEY);
  };
  getNews = API_KEY => {
    let url = `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${API_KEY}`;
    axios
      .get(url)
      .then(res => {
        const newsData = res.data.articles;
        // console.log("res.data:", res.data.articles);
        // console.log(newsData)
        this.setState({
          news: newsData
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="news-container">
        <NewsList news={this.state.news} />
      </div>
    );
  }
}
