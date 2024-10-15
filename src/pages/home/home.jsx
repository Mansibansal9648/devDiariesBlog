// dependencies
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import Footer from '../../common/footer';
import NavBar from '../../common/navBar';

// utils
import { limitText } from '../../utils/methods';

// files
import './home.css';
import slides from './slides';
import video from '../../assets/video.mp4';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // state
  const [currentIndex, setcurrentIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  
  const postsPerSlide = 4;

  // Navigate path to home page
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }

    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // featured post method
  function handlePrev() {
    setPostIndex((prevIndex) => (prevIndex === 0 ? '' : prevIndex - 1));
  }

  function handleNext() {
    // setPostIndex((prevIndex) => (prevIndex === post.length ? '' : prevIndex + 1));
  }

  function getCarousel() {
    return (
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundColor: slide.backgroundColor }}
          >
            {slide.content}
          </div>
        ))}
      </div>
    );
  }

  function getFeaturedPost() {
    return (
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
              {/* {post.map((post) => (
                <div className="post" key={post.id} style={{ margin: '10px' }}>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: limitText(post.content, 150), // Limiting content
                      }}
                      className="my-3"
                    />
                    <Link to={`/post/blogdetailpage`} state={post} className="nav-link d-inline-block mb-2">
                      Read More
                    </Link>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
          {/* Right button */}
          <button className="navigation-button right" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </section>
    );
  }

  function getComputerScreen() {
    return (
      <>
        <div class="codeeditorbr-container mt-5" style={{ textAlign: 'left' }}>
          <div class="codeeditorbr-row">
            <div class="codeeditorbr-column codeeditorbr-left">
              <span class="codeeditorbr-dot" style={{ background: '#ED594A' }}></span>
              <span class="codeeditorbr-dot" style={{ background: '#FDD800' }}></span>
              <span class="codeeditorbr-dot" style={{ background: '#5AC05A' }}></span>
            </div>

            <div class="codeeditorbr-column codeeditorbr-middle">
              <input
                type="text"
                disabled
                class="codeeditorbr-input fw-semibold"
                value="https://devDiaries.com"
                aria-label="Select template"
              />
            </div>
          </div>
          <video width="100%" height="500px" controls src={video}></video>
        </div>

        <div style={{ position: 'relative' }}>
          <div class="vl-howto"></div>
        </div>
        <a
          href=""
          class="w3-button ga-fp tut-button ws-black w3-padding-16 w3-mobile vl-howtobtn mb-5"
          style={{ fontSize: '20px' }}
        >
          Learn How To
        </a>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className=" content h-100">
        {getCarousel()}
        {getFeaturedPost()}
        {getComputerScreen()}
      </div>
      <Footer />
    </>
  );
}

export default Home;
