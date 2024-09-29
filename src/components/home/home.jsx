// dependencies
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";

// files
import "./home.css";
import slides from "./slides";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // state
  const [post, setPost] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  const postsPerSlide = 4;

  // Navigate path to home page
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }

    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // featured post method
  function handlePrev() {
    setPostIndex((prevIndex) => (prevIndex === 0 ? "" : prevIndex - 1));
  }

  function handleNext() {
    setPostIndex((prevIndex) =>
      prevIndex === post.length ? "" : prevIndex + 1
    );
  }
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  // File Execution to DOM
  return (
    <>
      <NavBar />
      <div className=" content h-100">
      {/*---------- Slides-------------------- */}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundColor: slide.backgroundColor }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      {/* ------------------------------------Featured Post--------------------------------------------------- */}
      <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="post-container">
          {/* Left button */}
          <button className="navigation-button left" onClick={handlePrev}>
            &#8249;
          </button>

          {/* Posts list */}
          <div className="posts-list">
            <div
              className="posts-slider"
              style={{
                transform: `translateX(-${postIndex * (100 / postsPerSlide)}%)`,
              }}
            >
              {post.map((post) => (
                <div className="post" key={post.id} style={{ margin: "10px" }}>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: limitText(post.content, 150), // Limiting content
                      }}
                      className="my-3"
                    />
                    <Link
                      to={`/post/blogdetailpage`}
                      state={post}
                      className="nav-link d-inline-block mb-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right button */}
          <button className="navigation-button right" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </section>
      </div>
      {/* footer */}
      
      <Footer/>
    </>
  );
}
export default Home;
