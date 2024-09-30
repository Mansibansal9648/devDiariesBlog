// Dependencies
import { NavLink } from 'react-router-dom';

// Files
import './navbar.css';

function NavBar() {
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
          <div className=" ms-3">
            <button className="btn button_style fw-semibold " data-bs-toggle="modal" data-bs-target="#exampleModal">
              Get Started
            </button>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="alert alert-primary">
                  <div className="modal-header p-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body fs-5 fw-bold text-center p-2">
                    New here? Join devDiaries and start sharing your coding journey today! Sign up to continue.
                  </div>
                </div>
                <div className="modal-footer border-top-0 p-0">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <NavLink to="/register">
                    <button type="button" className="btn button_style " data-bs-dismiss="modal">
                      SignUp
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
