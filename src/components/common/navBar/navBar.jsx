// Dependencies
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Files
import "./navbar.css";

// Images used
import search from "../../../assets/images/search-icon.png";

function NavBar() {
  return (
    <>
   
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
            <Link className="navbar-brand text-white d-none d-lg-block" to="/">
              DevDiaries
            </Link>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarText"
            >
             
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
   
    </>
  );
}

export default NavBar;
