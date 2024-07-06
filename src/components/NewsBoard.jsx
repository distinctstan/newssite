import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8c451b40005d4689bcc672756f0abf91`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setNews(data.articles));
  }, [category]);

  return (
    <div className="mt-4">
      <h2 className="text-center">
        <span className="badge bg-primary">
          {category.charAt(0).toUpperCase() + category.slice(1)} News
        </span>
      </h2>
      {news.length != 0 ? (
        news.map((article, index) => {
          return <NewsItem key={index} article={article} />;
        })
      ) : (
        <div className="text-center bg-dark text-light p-4">
          No Feed, Please check your internet connection.
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
