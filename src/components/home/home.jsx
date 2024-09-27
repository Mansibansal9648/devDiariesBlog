import { useEffect, useState } from "react";
import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAllPost } from "../common/api/postApi";
import { toast } from "react-toastify";
import "./homePage.css";

function Home({ slides }) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  const postsPerSlide = 4;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  }, [slides.length]);
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    let res = await getAllPost();
    if (res && res.data.responseCode === 200) {
      // toast.success(res.data.resMessage);
      // navigate(`/userpage/${user.id}`);
      setPost(res.data.data);
      setLoading(false);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong! ");
    }
  };
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const handlePrev = () => {
    setPostIndex((prevIndex) =>
      prevIndex === 0 ? "": prevIndex - 1
    );
  };

  // Function to handle next button click
  const handleNext = () => {
   
    console.log("right button");
    setPostIndex((prevIndex) =>
    prevIndex === post.length ? "" : prevIndex + 1
    );
  };

  return (
    <>
      <NavBar />
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
      <div className="homepage  z-n1 body-height">
        <main>
          {loading ? (
            <div className="loader"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
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
                        transform: `translateX(-${
                          postIndex * (100 / postsPerSlide)
                        }%)`,
                      }}
                    >
                      {post.map((post) => (
                        <div className="post" key={post.id} style={{margin: "10px"}}>
                          <div className="post-content">
                            <h3>{post.title}</h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: limitText(post.content, 150), // Limiting content
                              }}
                              className="my-3"
                            />
                            <Link
                              to={`/home/featuredpost/${post.id}/blogdetailpage`}
                              className="read-more"
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
            </>
          )}
        </main>
      </div>
      <footer>{<Footer />}</footer>
    </>
  );
}
export default Home;
