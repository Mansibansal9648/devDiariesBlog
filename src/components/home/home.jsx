import { useEffect, useState } from 'react';
import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getAllPost } from '../common/api/postApi';
import { toast } from 'react-toastify';
import './homePage.css'

function Home() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [])

  // useEffect(() => {
  //   const fetchBlogPosts = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/category/get-all-categories?category=others');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch blog posts.');
  //       }
  //       const data = await response.json();
  //       // console.log("aa", data)
  //       setBlogPosts(data.posts.slice(0, 6));
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

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
      <div className="homepage position-relative z-n1 body-height">
        <header className='mt-5'>
          <h1>Welcome to Dev Diaries Blog</h1>
        </header>
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
