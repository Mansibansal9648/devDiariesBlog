import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import search from "../../../assets/images/search-icon.png";
import { useAppContext } from "../../../contextApi/context";
import { useState } from "react";
import demoimg from "../../../assets/images/demo-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({ handleClick }) {
  const {
    store: { user },
  } = useAppContext();
  let location = useLocation();
  let pathArr = location.pathname.split("/");

  const [isrightSidebarExpanded, setIsRightSidebarExpanded] = useState(false);

  const toggleProfile = () => {
    setIsRightSidebarExpanded((prevState) => !prevState);
  };

  return (
    <>
      {user.isLogin ? (
        <div>
          <div className="navbar z-1 fixed-top">
            {pathArr[2] === "post" ? (
              <Link className="btn bg-white rounded-circle d-flex justify-content-center align-items-center" style={{height:"40px", width: "40px"}} to={`/userpage/${pathArr[3]}`}>
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
                    className="search_input d-none d-lg-flex"
                  />
                </div>
              </>
            )}

            <div className="end" onClick={toggleProfile}>
              <img src={demoimg} alt="Profile" className="profile bg-white" />
            </div>
            <div
              className={`rightsidebar text-center ${
                isrightSidebarExpanded ? "expanded " : ""
              } z-2`}
            >
              <img
                src={demoimg}
                alt=""
                className="bg-white  rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h2 className="text-primary">@{user.username}</h2>
              <button
                className="btn btn-danger rounded-4"
                onClick={() => localStorage.clear()}
              >
                Logout{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              // added bg-white to set background color to white
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
            <Link className="navbar-brand text-white d-none d-lg-block" to="/">
              DevDiaries
            </Link>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarText"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    to="/blogs/sport"
                  >
                    Sport
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs/political">
                    Political
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs/finance">
                    Finance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs/life">
                    Life
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/blogs/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center ms-auto d-block">
              <img
                src={search}
                alt="search-icon"
                style={{ width: "20px", height: "20px" }}
                className="mx-2 my-1  d-lg-block"
              />
              <span className="text-white mx-2 fw-light ">|</span>

              <Link
                className="text-white mx-2 fw-light text-decoration-none fs-6"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="text-white mx-2 fw-light text-decoration-none fs-6"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div className=" ms-3">
              <button
                className="btn btn-outline-primary text-white "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create Blog
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
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body fs-5 fw-bold text-center p-2">
                      You are not logged in. Please login to continue!
                    </div>
                  </div>
                  <div className="modal-footer border-top-0 p-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-primary "
                        data-bs-dismiss="modal"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
