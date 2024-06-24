// src/components/ArticleCard.js
import React from "react";
import "../ArticlesPage.css";

const ArticleCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="title">{title}</span>
        </a>
        <p className="desc">{description}</p>
        <a
          className="action"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out more
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
