// src/Pages/ArticlesPage.js
import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getCryptoNews } from "../services/NewsService";
import "../App.css";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = await getCryptoNews();
      setArticles(newsArticles);
    };

    fetchNews();
  }, []);

  return (
    <div className="ArticlesPage">
      <h1><div className="h1_div">Articles and News</div></h1>
      <div className="container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title.slice(0,50)}
            description={article.description?article.description.slice(0,100):"   "}
            link={article.url}
            imageUrl={!article.imageUrl?article.urlToImage : 'https://biztoc.com/cdn/80a7c0059d9edec4_s.webp'}  // Default placeholder image
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
