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
    top:"66px",
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
              <Link to={`/userpage/${user.id}`} className="nav-link text-success fs-4">
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
              <Link to={"/userpage/blogs/sports"} className="nav-link">
                Sports
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={"/userpage/blogs/health"} className="nav-link">
                Health
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={"/userpage/blogs/business"} className="nav-link">
                Business
              </Link>
            </div>
            <div className="list-group-item">
              <Link to={"/userpage/blogs/entertainment"} className="nav-link">
                Entertainment
              </Link>
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
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default WithSideBar;
