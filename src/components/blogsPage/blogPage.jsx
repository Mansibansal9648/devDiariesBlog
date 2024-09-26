import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./blogPage.css";
import NavBar from "../common/navBar/navBar";
import Footer from "../common/footer/footer";

export default function BlogPage({ isLayout }) {
  const { category } = useParams("");
  const [data, setData] = useState(null);
  const [sideArticle, setSideArticle] = useState(null);
  

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b6274bdcf4c54bd5ac8fb40e8f768a1a&page=1&pageSize=8`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return (
          console.log(data),
          setData(data.articles.slice(0, 2)),
          setSideArticle(data.articles.toSpliced(0, 2))
        );
      });
  }, [category]);

  return (
    <>
      {isLayout && <NavBar />}

      <div className="blog-container">
        <div className="main-post">
          {data !== null &&
            data.map((article) => (
              <div className="post">
                <img src={article.urlToImage} alt="Main Post" />
                <div className="post-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <Link to="/abc">Read More</Link>
                </div>
              </div>
            ))}
        </div>
        <div className="side-posts">
          {sideArticle !== null &&
            sideArticle.map((article) => (
              <div className="post">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <Link to="/abc">Read More</Link>
              </div>
            ))}
        </div>
      </div>
      {isLayout && <Footer />}
    </>
  );
}
