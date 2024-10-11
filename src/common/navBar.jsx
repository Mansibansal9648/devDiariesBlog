import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open'); // Add class when modal is open
    } else {
      document.body.classList.remove('modal-open'); // Remove class when modal is closed
    }
  }, [showModal]);

  return (
    <>
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
    </>
  );
}

export default NavBar;
