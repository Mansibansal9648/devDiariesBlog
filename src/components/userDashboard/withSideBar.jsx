import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contextApi/context";
import Footer from "../common/footer/footer";
import "./withSideBar.css"

const WithSideBar = ({
  children,
  stateWidth: { isFullWidth, isSidebarExpanded },
}) => {
  const {
    store: { user },
  } = useAppContext();
  const mainContentStyle = {
    width: isFullWidth ? "100%" : "calc(100% - 300px)",
     minHeight: "100vh -66px",
    height: "100vh -66px",
    overflow: "auto ",
    transition: "width 0.3s",
    position: "absolute",
    top: "66px",
    right: 0,
    display: "inline-block",
  };

  let listStyle = {
    padding: "8px 26px"
  }
  return (
    <>
      <div className="row sidebar-con">
        {" "}
        {/**style={{ margin: "0" }} */}
        <div className={`sidebar ${isSidebarExpanded ? "expanded" : ""}`}>
          <div
            className="list-group mb-2 body-color"
            style={{ marginTop: "20px", padding: "10px" }}
          >
            <div className="list-group-item  pt-4 pb-3">
              <Link
                to={`/userpage/${user.id}`}
                className="heading text-decoration-none text-success fs-4"
              >
                Hi! @{user.username}
              </Link>
            </div>
            <div className="newpost">
              <Link
                to={`/userpage/post/${user.id}`}
                className="heading mb-0 text-decoration-none list-group-item hover-element"
                style={{ color: "orange" }}
              >
                + NEW POST
              </Link>
            </div>
            <div className="list-group-item hover-element">
              <Link to={`/userpage/${user.id}`} className="heading text-decoration-none">
                <b>My Blogs</b>
              </Link>
            </div>
            <div className="list-group-item hover-element">
              <Link to={`/userpage/blogs/random`} className="heading text-decoration-none">
                All Blogs
              </Link>
            </div>

            <div className="accordion accordion-flush" id="category-accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed hover-element"
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#category-accordion"
                >
                  <div className="accordion-body" style={{padding:"0px"}}>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item list-group-item-action hover-element" >
                        <Link
                          to={"/userpage/blogs/sports"}
                          className="heading text-decoration-none"
                        >
                          Development
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element">
                        <Link
                          to={"/userpage/blogs/health"}
                          className="heading text-decoration-none"
                        >
                          Programming language
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element">
                        <Link
                          to={"/userpage/blogs/technology"}
                          className="heading text-decoration-none"
                        >
                          Technology
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element" >
                        <Link
                          to={"/userpage/blogs/business"}
                          className="heading text-decoration-none"
                        >
                          Devops
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element" >
                        <Link
                          to={"/userpage/blogs/science"}
                          className="heading text-decoration-none"
                        >
                          Cloud
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element">
                        <Link
                          to={"/userpage/blogs/general"}
                          className="heading text-decoration-none"
                        >
                          Career & growth
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element" >
                        <Link
                          to={"/userpage/blogs/entertainment"}
                          className="heading text-decoration-none"
                        >
                          Tools
                        </Link>
                      </div>
                      <div className="list-group-item list-group-item-action hover-element" >
                        <Link
                          to={"/userpage/blogs/general"}
                          className="heading text-decoration-none"
                        >
                          others
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="list-group-item hover-element">
              <Link to={"/"} className="heading text-decoration-none">
                Stats
              </Link>
            </div>
            <div className="list-group-item hover-element">
              <Link to={"/"} className="heading text-decoration-none">
                Comments
              </Link>
            </div>
            <div className="list-group-item hover-element">
              <Link to={"/"} className="heading text-decoration-none">
                Pages
              </Link>
            </div>

            <div className="list-group-item hover-element">
              <Link to={"/"} className="heading text-decoration-none">
                Setting
              </Link>
            </div>
          </div>
        </div>
        <div style={mainContentStyle} className="min-vh-100 body-color">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WithSideBar;
