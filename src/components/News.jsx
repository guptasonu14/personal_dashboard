// src/components/News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/News.css';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=9bd2b4a39b964fc4b52fad6e737fefa1`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        setError('Failed to fetch news data');
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-widget">
      <h2>Top News</h2>
      <ul>
        {newsData.slice(0, 5).map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
