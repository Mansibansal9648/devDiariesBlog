import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contextApi/context";
import Footer from "../common/footer/footer";

const WithSideBar = ({
  children,
  stateWidth: { isFullWidth, isSidebarExpanded },
}) => {
  const {
    store: { user },
  } = useAppContext();
  const mainContentStyle = {
    width: isFullWidth ? "100%" : "calc(100% - 300px)",
    // minHeight: "100vh -66px",
    height: "100vh -66px",
    overflow: "auto ",
    transition: "width 0.3s",
    position: "absolute",
    top: "66px",
    right: 0,
    display: "inline-block",
  };
  return (
    <>
      <div className="row sidebar-con">
        {" "}
        {/**style={{ margin: "0" }} */}
        <div className={`sidebar ${isSidebarExpanded ? "expanded" : ""}`}>
          <div
            className="list-group mb-2"
            style={{ marginTop: "20px", padding: "10px" }}
          >
            <div className="list-group-item  pt-4 pb-3">
              <Link
                to={`/userpage/${user.id}`}
                className="nav-link text-success fs-4"
              >
                Hi! @{user.username}
              </Link>
            </div>
            <div className="newpost">
              <Link
                to={`/userpage/post/${user.id}`}
                className="nav-link list-group-item"
                style={{ color: "orange" }}
              >
                + NEW POST
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={`/userpage/${user.id}`} className="nav-link">
                <b>My Blogs</b>
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={`/userpage/blogs/random`} className="nav-link">
                All Blogs
              </Link>
            </div>

            <div className="accordion accordion-flush" id="category-accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{padding: "13px 16px"}}
                  >
                    Blogs categories
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#category-accordion"
                >
                  <div className="accordion-body" style={{padding:"10px"}}>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/sports"}
                          className="nav-link"
                        >
                          Development
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/health"}
                          className="nav-link"
                        >
                          Programming language
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/technology"}
                          className="nav-link"
                        >
                          Technology
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/business"}
                          className="nav-link"
                        >
                          Devops
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/science"}
                          className="nav-link"
                        >
                          Cloud
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/general"}
                          className="nav-link"
                        >
                          Career & growth
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/entertainment"}
                          className="nav-link"
                        >
                          Tools
                        </Link>
                      </div>
                      <div className="list-group-item">
                        <Link
                          to={"/userpage/blogs/general"}
                          className="nav-link"
                        >
                          others
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="list-group-item">
              <Link to={"/"} className="nav-link">
                Stats
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={"/"} className="nav-link">
                Comments
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={"/"} className="nav-link">
                Pages
              </Link>
            </div>

            <div className="list-group-item">
              <Link to={"/"} className="nav-link">
                Setting
              </Link>
            </div>
          </div>
        </div>
        <div style={mainContentStyle} className="min-vh-100">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WithSideBar;
