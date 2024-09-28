import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contextApi/context';
import { useEffect, useState } from 'react';
// import demoimg from "../../../assets/images/demo-img.jpg";
import icon from '../../../assets/images/unnamed.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllCategories } from '../api/categoryApi';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

function NavBar({ handleClick, handleInputTitle }) {
  const {
    store: { user },
  } = useAppContext();
  let location = useLocation();
  let pathArr = location.pathname.split('/');

  const navigate = useNavigate();
  const [isRightSidebarExpanded, setIsRightSidebarExpanded] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let res = await getAllCategories();
    if (res && res.data.responseCode === 200) {
      // toast.success(res.data.resMessage);
      // navigate(`/userpage/${user.id}`);
      setCategory(res.data.data);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error('Something went wrong! ');
    }
  };
  const toggleProfile = () => {
    setIsRightSidebarExpanded((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.clear();

    navigate('/home');
  };

  return (
    <>
      {user.isLogin ? (
        <div>
          <div className="navbar z-3 fixed-top">
            {pathArr[2] === 'post' ? (
              <Link
                className="btn bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: '40px', width: '40px' }}
                to={`/userpage/${pathArr[3]}`}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              </Link>
            ) : (
              <>
                <div className="start">
                  <button className="btn bg-white" onClick={handleClick}>
                    <svg focusable="false" viewBox="0 0 24 24" className="">
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                  </button>
                </div>
                <div className="searchbar">
                  <input
                    type="text"
                    placeholder="Search posts"
                    className="search_input icon-button d-none d-lg-flex"
                    onChange={handleInputTitle}
                  />
                </div>
              </>
            )}

            <div className="end" onClick={toggleProfile}>
              <img src={icon} alt="Profile" className="profile bg-white" />
            </div>

            {/* Right Sidebar */}
            <div className={`rightsidebar text-center ${isRightSidebarExpanded ? 'expanded ' : ''} z-2`}>
              <img
                src={icon}
                alt=""
                className="bg-white  rounded-circle"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <h2 className="text-primary">@{user.username}</h2>
              <button
                className="btn btn-danger rounded-4"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal" // Unique ID for logout modal
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler border-0 bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand logo d-none d-lg-block common_text_color" to="/">
              DevDiaries
            </Link>
            <div className="collapse navbar-collapse justify-content-center" id="">
              <ul className="navbar-nav mb-2 mb-lg-0">
                {category.map((categoryItem) => (
                  <li className="nav-item" key={categoryItem._id}>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'nav-link active button_text' : 'nav-link button_text')}
                      to={`/blogs/${categoryItem.key}`}
                    >
                      {categoryItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex align-items-center ms-auto d-block common_text_color">
              <FontAwesomeIcon icon="fas fa-search" />
              <span className="common_text_color mx-2">|</span>

              <Link className="mx-2 m-auto fw-light text-decoration-none fs-6 common_text_color" to="/login">
                Login
              </Link>
              <Link className="mx-2 m-auto fw-light text-decoration-none fs-6 common_text_color" to="/register">
                Register
              </Link>
            </div>
            <div className="ms-2">
              <button
                className=" btn-create-blog"
                data-bs-toggle="modal"
                data-bs-target="#createBlogModal" // Unique ID for create blog modal
              >
                Create Blog
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Logout Modal */}
      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="alert alert-primary">
              <div className="modal-header p-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body fs-5 fw-bold text-center p-2">Logout of your account ?</div>
            </div>
            <div className="modal-footer border-top-0 p-0">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>

              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Blog Modal */}
      <div
        className="modal fade"
        id="createBlogModal"
        tabIndex="-1"
        aria-labelledby="createBlogModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="alert alert-primary">
              <div className="modal-header p-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body fs-5 fw-bold text-center p-2">
                You are not logged in. Please login to create a blog!
              </div>
            </div>
            <div className="modal-footer border-top-0 p-0">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <Link to="/login">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
