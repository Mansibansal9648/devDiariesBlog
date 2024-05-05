import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './blogPage.css'
import NavBar from '../common/navBar/navBar'
import Footer from '../common/footer/footer'

export default function BlogPage() {
    const {category} = useParams()
    console.log(category)
    const [data, setData] = useState(null)
    const [sideArticle, setSideArticle] = useState(null)

    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5863c9093a5a49d9a09744f99f6cc1c7&page=1&pageSize=8`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            return console.log(data),
            setData(data.articles.slice(0,2)),
            setSideArticle(data.articles.toSpliced(0,2))
        })
    },[category])
    
  return (
<>
<NavBar/>
<div className="blog-container">
        <div className="main-post">
            {data!==null && data.map((article)=>(
                <div className="post">
                <img src={article.urlToImage} alt="Main Post"/>
                <div className="post-content">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <Link to="/abc">Read More</Link>
                </div>
            </div>
            ))}    
            
        </div>
        <div className="side-posts">
            {sideArticle !==null && sideArticle.map((article)=>(
                <div className="post">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <Link to="/abc">Read More</Link>
            </div>
            )) }
            
        </div>
    </div>
    <Footer/>
</>
)
}
