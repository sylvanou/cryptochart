import React from "react";
import "./NewsList.css";

const newsList = props => {
  let articles = props.news;
  console.log("articles:", articles);
  return (
    <ul className="news-list">
    <h1 className="hodlr-news-header">HODLR News</h1>
      {articles.map((article, i) => (
        <a href={article.url} target="blank" className="news-item" key={i}>
          <img className="news-image" src={article.urlToImage} alt="" />
          <div className="news-header">
            <small className="news-published-date">Publish Date: {article.publishedAt.split('T')[0]}</small>
          <div className="news-title" key={articles[i]}>{article.title}</div>
          <p className="news-content">{article.content.split('[')[0]}</p>
          </div>
        </a>
      ))}
    </ul>
  );
};

export default newsList;
