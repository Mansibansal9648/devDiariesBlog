//Dependencies
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  //states
  const [showModal, setShowModal] = useState(false);
  const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open'); // Add class when modal is open
    } else {
      document.body.classList.remove('modal-open'); // Remove class when modal is closed
    }
  }, [showModal]);

  return (
    <>
      {isLogin ? (
        <div>
          <div className="navbar z-3 fixed-top">
            <Link className="btn bg-white rounded-circle d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </Link>

            <>
              <div className="start">
                <button className="btn bg-white">
                  <svg focusable="false" viewBox="0 0 24 24" className="">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
                </button>
              </div>
              <div className="searchbar">
                <input type="text" placeholder="Search posts" className="search_input icon-button d-none d-lg-flex" />
              </div>
            </>

            <div className="end">
              <img alt="Profile" className="profile bg-white" />
            </div>

            {/* Right Sidebar */}
            <div>
              <img
                alt=""
                className="bg-white  rounded-circle"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <h2 className="text-primary"></h2>
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
        <nav className="navbar navbar_style fixed-top navbar-expand-lg">
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
            <NavLink className="logo_color navbar-brand" to="/home">
              DevDiaries
            </NavLink>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText"></div>
            <div className="d-flex align-items-center ms-auto d-block">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text_style active mx-2 fs-6 text-decoration-none'
                    : 'text_style mx-2 text-decoration-none fs-6'
                }
                to="/about"
              >
                Our Story
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text_style active mx-2 fs-6 text-decoration-none'
                    : 'text_style mx-2 text-decoration-none fs-6'
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text_style active mx-2 fs-6 text-decoration-none'
                    : 'text_style mx-2 text-decoration-none fs-6'
                }
                to="/login"
              >
                SignIn
              </NavLink>
            </div>
            <div className="ms-3">
              <button
                className="btn button_style fw-semibold"
                onClick={() => setShowModal(true)} // Show modal on click
              >
                Get Started
              </button>
            </div>

            {showModal && (
              <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal_container modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="alert alert-primary">
                      <div className="modal-header p-0">
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowModal(false)} // Close modal
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body fs-5 fw-bold text-center p-2">
                        New here? Join devDiaries and start sharing your coding journey today! Sign up to continue.
                      </div>
                    </div>
                    <div className="modal-footer border-top-0 p-0">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)} // Close modal
                      >
                        Close
                      </button>
                      <NavLink to="/register">
                        <button type="button" className="btn button_style">
                          SignUp
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
