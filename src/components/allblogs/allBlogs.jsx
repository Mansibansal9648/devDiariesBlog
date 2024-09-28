import { useEffect, useState } from "react";
import { getAllPost } from "../common/api/postApi.js";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import "./allBlogs.css";

function AllBlogs() {
  // const location = useLocation();
  // const posts = location.state
  // console.log ("posts", posts)

  const [post, setPost] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [hasMore, setHasMore] = useState(true);
  const [sidePosts, setSidePosts] = useState([]);
  //console.log("post", post);
  useEffect(() => {
    getAllPosts();
    getSidePosts();
  }, [page]);
  const getAllPosts = async () => {
    const res = await getAllPost(1, 3);
    if (res && res.data.responseCode === 200) {
      setPost(res.data.data);

      // toast.success(res.data.resMessage);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  };
  const getSidePosts = async () => {
    const res = await getAllPost(page, limit);
    if (res && res.data.responseCode === 200) {
      console.log("setsidepost 200", res.data.data);
      //  setSidePosts (res.data.data);
      setSidePosts((prevPosts) => {
        console.log("Previous Posts:", prevPosts);
        console.log("New Posts:", res.data.data);
        return [...prevPosts, ...res.data.data];
      });
    } else if (res && res.data.responseCode === 400) {
      //  console.log("res.data.data", res.data.data)

      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  };
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  const loadMorePosts = () => {
    if (hasMore) {
      console.log("Loading more posts, current page:", page);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <div className="mb-3">
          <span>
            <i class="fa-solid fa-arrow-trend-up fa-2x me-2"></i>
          </span>
          <span className="fw-semibold fs-3">Trending</span>
        </div>
        <div className="d-flex gap-3">
          {post.slice(0, visibleBlogs).map((post, index) => (
            <div
              className="col-md-3 col-lg-3 mb-4"
              style={{ height: "300px" }}
              key={index}
            >
              <div
                className="card card-common-height d-flex"
                style={{ width: "100%" }}
              >
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body card_container">
                  <h5 className="card-title">{post.title}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: limitText(post.content, 150), // Limiting content
                    }}
                    className="my-3"
                  />
                  <p className="">100k views</p>
                  <Link to={`/userpage/allblogs/blogdetailpage`} state={post}>
                    <button type="button" className="btn btn-primary">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="side-post mx-2 ">
            <div className="mb-1">
              <span className="fw-semibold fs-5">All Blogs</span>
            </div>
            <div className="d-flex flex-column gap-2">
              {sidePosts.map((post) => (
                <>
                  <Link
                    to={`/userpage/allblogs/blogdetailpage`}
                    state={post}
                    className="nav-link" style={{ color: "black" }}
                  >
                    <div className="border border-1 p-2 side_post">
                      <p>{post.title}</p>
                    </div>
                  </Link>
                </>
              ))}
            </div>

            {hasMore && (
              <button onClick={loadMorePosts} className="btn btn-primary mt-3">
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default AllBlogs;
