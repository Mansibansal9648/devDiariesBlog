import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./blogPage.css";
import NavBar from "../common/navBar/navBar";
import BlogDetailPage from "../blogDetailPage/blogDetailPage";
import Footer from "../common/footer/footer";
import { getPostByCategory } from "../common/api/postApi";
import { toast } from "react-toastify";

export default function BlogPage({ isLayout }) {
  const { category } = useParams("");
  const [post, setPost] = useState([]);
  const [sidePost, setSidePost] = useState([]);

  useEffect(() => {
    getPostsByCategory(category)
  }, [category]);
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const getPostsByCategory = async (category) => {
    const res = await getPostByCategory(category);
    if (res && res.data.responseCode === 200) {
      setPost(res.data.data.slice(0, 5));
      setSidePost(res.data.data.toSpliced(0, 2));
       console.log("error201", res.data.data)
      toast.success(res.data.resMessage);

      
    } else if (res && res.data.responseCode === 400) {
      //  console.log("error")
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  }

  return (
    <>
      {isLayout && <NavBar />}

      <div className="blog-container body-height">
        <div className="main-post">
          {
            post.map((posts) => (
              <div className="post">
                {/* <img src={article.urlToImage} alt="Main Post" /> */}
                <div className="post-content">
                  <h2>{posts.title}</h2>
                  <p
                  dangerouslySetInnerHTML={{
                    __html: limitText(posts.content, 300) // Limiting content
                  }}
                  className="my-3"
                />
                   
                  {/* <p>{posts.content}</p> */}
                  {posts.userId && (<Link to={`/userpage/blogs/${posts.userId}/${posts.category}`}>Read More</Link>)}
                  
                  
                </div>
              </div>
            ))}
        </div>
        <div className="side-posts">
          {
            sidePost.map((posts) => (
              <div className="post">
                <h2>{posts.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: limitText(posts.content, 150) // Limiting content
                  }}
                  className="my-3"
                />
                <Link to="/abc">Read More</Link>
              </div>
            ))}
        </div>
      </div>
     
    </>
  );
}
