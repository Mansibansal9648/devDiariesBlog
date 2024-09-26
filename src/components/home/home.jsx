import { useEffect, useState } from 'react';
import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getAllPost } from '../common/api/postApi';
import { toast } from 'react-toastify';
import './homePage.css'

function Home({slides}) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [])

  useEffect(()=> {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  }, [slides.length])
  useEffect (()=> {
    getAllPosts();
  }, [])

  const getAllPosts = async ()=> {
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
  }

    
  return (
    <>
      <NavBar />
      <div className='slider-container'
        >
          {slides.map((slide, index)=> (
            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundColor: slide.backgroundColor }}>
              {slide.content}
            </div>
          ))

          }
        </div>
      <div className="homepage position-relative z-n1 body-height">
        
        <main>
          {loading ? (
            <div className="loader"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <section className="featured-posts">
                <h2>Featured Posts</h2>
                <div className="posts-list">
                  {post.map(posts => (
                    <div className="post">
                      
                      <div className="post-content">
                        <h3>{posts.title}</h3>
                        <p
                  dangerouslySetInnerHTML={{
                    __html: posts.content 
                  }}
                  className="my-3"
                />
                        <Link to={`/userpage/post/${posts.id}/blogdetailpage`} className="read-more">Read More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
        
      </div>
      <footer>
          {<Footer />}
      </footer>


    </>
  );
}
export default Home;
