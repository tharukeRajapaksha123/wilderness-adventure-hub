import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, post, price, description }) => (

  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{description}</p>
        <h2
          style={{
            fontFamily: "var(--font-family);",
            color: "white",

          }}
        >{(price != null || price != undefined) ? `LKR ${price}` : "LKR 18,000"}</h2>
      </div>

    </div>
  </div>
);

export default Article;
