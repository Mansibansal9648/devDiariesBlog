import { useAppContext } from "../../contextApi/context";
import profilePic from "../../assets/images/profile.png";
import "./myBlog.css";
import { getPost, deletePost } from "../common/api/postApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pimg from "../../assets/images/catwallpaper.jpg";
import { searchPostByTitle } from "../common/api/searchPost";
import debounce from "../../utils/helper/debounceFunction";
// import useDebounce from "../../hooks/useDebounce";
import moment from "moment";
import 'moment-timezone';

function MyBlog() {
  const {
    store: { user },
  } = useAppContext();

  const [posts, setPosts] = useState(null);

  const getmyPost = async () => {
    let res = await getPost(user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      setPosts(res.data.data);
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
    } else if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      getmyPost();
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };

  useEffect(() => {
    getmyPost();
  }, []);

  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1">
          <div className="container my-3 py-3 border border-1">
            <h4>All Posts</h4>
            <ul className="list-group">
              {posts !== null && posts.length > 0 ? (
                posts.map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="list-group-items border border-1 d-flex justify-content-between align-items-center rounded-0 p-3 my-2"
                    >
                      <div className="start d-flex align-items-center">
                        <div className="thumbnail img-fluid m-2 border border-2 rounded">
                          <img
                            src={pimg}
                            alt="U"
                            className="img-fluid h-100"
                          />
                        </div>
                        <div className="post-detail">
                          <h6 className="fw-bold">{item.title}</h6>
                          <p>{}</p>
                          {/* <span>
                            {item.createdAt == item.updatedAt?<span>Created : {item.createdAt.split("GMT")[0]}</span>:<span>Updated : {item.updatedAt.split("GMT")[0]}</span>}
                          </span> */}
                          <span>
                            {item.createdAt==item.updatedAt?<span>Created At :{ moment.parseZone(item?.createdAt)?.tz('Asia/Kolkata')?.format('ddd MMMM D, YYYY [at] h:mm:ss A')}</span>:<span>Updated At : {moment.parseZone(item?.updatedAt)?.tz('Asia/Kolkata')?.format('ddd MMMM D, YYYY [at] h:mm:ss A')}</span>}
                          </span>
                        </div>
                        <div className="mid d-flex gap-2 align-self-end">
                          {item.labels.map((label) => {
                            return (
                              <div
                                key={label}
                                className="label border border-3 rounded-4 px-2"
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
                            <i className="fa-solid fa-pen edit_btn fs-5"></i>
                          </Link>
                          <Link
                            to={`/userpage/${user.id}/post/blogdetailpage`}
                            state={item}
                            className="nav-link d-inline-block"
                          >
                            <i className="fa-regular fa-eye edit_btn fs-5"></i>
                          </Link>
                        </div>
                        <div className="end_icons">
                          <div className="username d-flex align-items-center gap-1">
                            <h6 className="m-0">{user.username}</h6>
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
                })
              ) : (
                <div className="text-center">
                  <h5>No Post Available</h5>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MyBlog;
