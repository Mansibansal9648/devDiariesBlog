import { useAppContext } from "../../contextApi/context";
import profilePic from "../../assets/images/profile.png";
import "./myBlog.css";
import { getPost, deletePost, searchPostByTitle } from "../common/api/postApi";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pimg from "../../assets/images/catwallpaper.jpg";
import debounce from "../../utils/helper/debounceFunction";
// import useDebounce from "../../hooks/useDebounce";
import { labelUsedByUser, getPostByLabel } from "../common/api/postApi";
import moment from "moment";
import "moment-timezone";
import InfiniteScroll from "react-infinite-scroll-component";

function MyBlog({ postTitle }) {
  const {
    store: { user },
  } = useAppContext();
  // console.log(user);

  const [posts, setPosts] = useState([]);
  // const debounce = useDebounce()
  const [usedLabels, setUsedLabels] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [active, setActive] = useState("all");
  // console.log(typeof active)

  const getmyPost = async () => {
    let res = await getPost(user.accessToken, page, limit);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
      // } else if (res && res.data.responseCode === 403) {
      //   toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };
  const allUsedLabels = async () => {
    let res = await labelUsedByUser(user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      setUsedLabels(res.data.data);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };

  const getAllUserPostByLabel = async (label) => {
    let res = await getPostByLabel(label, user.accessToken, page, limit);
    // console.log("labelss", label);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      // setPosts(res.data.data);
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };

  const removePost = async (postId) => {
    let res = await deletePost(postId, user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
      // } else if (res && res.data.responseCode === 403) {
      //   toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      // getmyPost();
      let result = posts.filter((post) => post._id != postId);
      setPosts(result);
      allUsedLabels();
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };
  useEffect(() => {
    // getmyPost();
    allUsedLabels();
  }, []);

  const getPostByTitle = async () => {
    let res = await searchPostByTitle(postTitle, user.accessToken, page, limit);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      // console.log(res.data.data)
      // if(page==1){
      //   setPosts(res.data.data)
      // }else{
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);

      // }

      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
      // setPosts(res.data.data);
    } else if (res && res.data.responseCode === 400) {
      // toast.error("Post dosen't exists")
      // setPosts([])
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };

  // const debouncedGetPostByTitle=()=>{debounce(getPostByTitle,800)}
  const debouncedGetPostByTitle = () => {
    debounce(() => {
      getPostByTitle();
    }, 800); // Delay of 800ms
  };

  useEffect(() => {
    setPage(1);
    setPosts([]);
    // if (!postTitle) {
      if (active === "all") {
        if(!postTitle){
          getmyPost(); 
        }else{
          debouncedGetPostByTitle(); 
        }
      // Load all posts if no search title
      } else {
        getAllUserPostByLabel(active); // If a label is active, load label posts
      }
    // } else {
    //   // Fetch posts by title
    //   debouncedGetPostByTitle(); 
    // }
  }, [postTitle, active]);
  // const extractImage =()=>{

  // }
  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1 body-color">
          <div className="outer_label_container  position-fixed">
            <div className="container  label_container py-2">
              {/* <span
                className={
                  active == "all"
                    ? "badge  py-2 px-4 mx-3 my-2 border-1 pos bg-success fs-6 rounded-4"
                    : " badge text-dark  py-2 px-4 mx-3 my-2 border border-3 pos fs-6 rounded-4"
                }
                onClick={() => {
                  // getmyPost();
                  setActive("all");
                }}
              >
                All
              </span> */}
              <button type="button " className={active == "all" ? "btn btn-label btn-inactive" : "btn btn-label btn-active"} onClick={() => setActive("all")}>All</button>
              {usedLabels.length != 0 &&
                usedLabels.map((item) => {
                  return (
                    <button
                      className={
                        item == active
                          ? "btn btn-label btn-active"
                          : "btn btn-label btn-inactive"
                      }
                      onClick={() => {
                        setPage(1);
                        setPosts([]);
                        // getAllUserPostByLabel(item);
                        setActive(item);
                        // console.log("item", typeof item);
                      }}
                      value={item}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="container all_post_container py-3">
            <h4 className="heading">All Posts</h4>
            {posts.length ? (
              <InfiniteScroll
                dataLength={posts.length}
                next={() => {
                  if (postTitle) {
                    debouncedGetPostByTitle(); // If searching by title
                  } else if (active === "all") {
                    getmyPost(); // If viewing all posts
                  } else {
                    getAllUserPostByLabel(active); // If filtering by label
                  }
                }}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yipee! You have seen all posts</b>
                  </p>
                }
              >
                <ul className="list-group">
                  {posts.map((item) => {
                    return (
                      <li
                        key={item._id}
                        className="list-group-items  d-flex justify-content-between align-items-center rounded-3 p-3 my-2"
                      >
                        <div className="start d-flex align-items-center">
                          <div className="thumbnail img-fluid m-2 border border-2 rounded">
                            <img
                              src={pimg}
                              alt="U"
                              className="img-fluid h-100"
                            ></img>
                          </div>
                          <div className="post-detail">
                            <h6 className="fw-bold">{item.title}</h6>
                            <p>{}</p>
                            {/* <span>
                            {item.createdAt == item.updatedAt?<span>Created : {item.createdAt.split("GMT")[0]}</span>:<span>Updated : {item.updatedAt.split("GMT")[0]}</span>}
                          </span> */}
                            <span>
                              {item.createdAt == item.updatedAt ? (
                                <span>
                                  Created At :{" "}
                                  {moment
                                    .parseZone(item?.createdAt)
                                    ?.tz("Asia/Kolkata")
                                    ?.format("ddd MMMM D, YYYY [at] h:mm:ss A")}
                                </span>
                              ) : (
                                <span>
                                  Updated At :{" "}
                                  {moment
                                    .parseZone(item?.updatedAt)
                                    ?.tz("Asia/Kolkata")
                                    ?.format("ddd MMMM D, YYYY [at] h:mm:ss A")}
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="mid d-flex gap-2 align-self-end">
                            {item.labels.map((label) => {
                              return (
                                <div
                                  className="label border border-3 rounded-4 px-2"
                                  key={label}
                                >
                                  {label}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="last d-flex gap-4">
                          <div className="end_btn me-4">
                            <i
                              className="fa-solid fa-trash me-5 fs-5 del_btn"
                              onClick={() => {
                                removePost(item._id);
                              }}
                            ></i>
                            <Link
                              to={`/userpage/post/${item._id}/edit`}
                              state={item}
                              className="nav-link d-inline-block me-5"
                            >
                              <i className="fa-solid fa-pen edit_btn  fs-5"></i>
                            </Link>
                            <Link
                              to={`/userpage/post/${user.id}/blogdetailpage`}
                              state={item}
                              className="nav-link d-inline-block"
                            >
                              <i className="fa-regular fa-eye edit_btn  fs-5"></i>
                            </Link>
                          </div>
                          <div className="end_icons">
                            <div className="username d-flex align-items-center gap-1">
                              <h6 className="m-0">{user.username}</h6>
                              {/* <i class="fa-solid fa-trash"></i> */}
                              <div className="profile_pic broder border-2 rounded-circle">
                                <img
                                  src={profilePic}
                                  alt="U"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="stats d-flex gap-0 p-2">
                              <div className="comment">
                                <span className="p-2">4</span>
                                <i className="fa-regular fa-comment"></i>
                              </div>
                              <div className="count">
                                <span className="p-2">3</span>
                                <i className="fa-solid fa-chart-simple"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

              </InfiniteScroll>
            ) : (
              <div className="text-center">
                <h5>No Post Available</h5>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MyBlog;
