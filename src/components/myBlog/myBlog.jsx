import { useAppContext } from "../../contextApi/context";
import pp from "../../assets/images/profile.png";
import "./myBlog.css";
import { getPost, deletePost } from "../common/api/postApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pimg from "../../assets/images/catwallpaper.jpg";

function MyBlog() {
  const {
    store: { user },
  } = useAppContext();
  // console.log(user);

  const [posts, setPosts] = useState(null);

  const getmyPost = async () => {
    let res = await getPost(user.accessToken);
    if(res && res.data.responseCode ===200){
      setPosts(res.data.data);
    }else if(res && res.data.responseCode ===400){
      toast.error(res.data.errMessage);
    }
    else{
      toast.error("Something wrong with backend")
    }
  }

  const removePost = async (postId) => {
    let res = await deletePost(postId, user.accessToken);
    if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      getmyPost();
    } else {
      toast.error(res.data.errMessage);
    }
  };
  useEffect(() => {
    getmyPost();
  }, []);

  // const extractImage =()=>{

  // }
  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1">
          <div className="container my-3 py-3 border border-1">
            <h4>All Posts</h4>
            <ul className="list-group">
              {posts !== null &&
                posts?.map((item) => {
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
                          ></img>
                        </div>
                        <div className="post-detail">
                          <h6>{item.title}</h6>
                          <p>{}</p>
                          <span>
                            {item.updatedAt}
                          </span>
                        </div>
                        <div className="mid d-flex gap-2 align-self-end">
                          {item.labels.map((label) => {
                            return (
                              <div className="label border border-3 rounded-4 px-2">{label}</div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="last d-flex gap-4">
                        <div className="end_btn">
                          <i
                            className="fa-solid fa-trash pe-5 fs-5 del_btn"
                            onClick={() => {
                              removePost(item._id);
                            }}
                          ></i>
                          <Link
                            to={`/userpage/post/${item._id}/edit`}
                            state={item}
                            className="nav-link d-inline-block"
                          >
                            <i className="fa-solid fa-pen edit_btn pe-3 fs-5"></i>
                          </Link>
                          <Link
                            to={`/userpage/${user.id}/post/blogdetailpage`}
                            state={item}
                            className="nav-link d-inline-block"
                          >
                            <i className="fa-regular fa-eye edit_btn pe-3 fs-5"></i>
                          </Link>
                        </div>
                        <div className="end_icons">
                          <div className="username d-flex align-items-center gap-1">
                            <h6 className="m-0">{user.username}</h6>
                            {/* <i class="fa-solid fa-trash"></i> */}
                            <div className="profile_pic broder border-2 rounded-circle">
                              <img src={pp} alt="U" className="img-fluid" />
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MyBlog;

// import React, { useEffect, useState } from 'react';

// const ImageRenderer = () => {
//   const [imageSources, setImageSources] = useState([]);

//   useEffect(() => {
//     // Example HTML string containing image tags with base64 content
//     const htmlString = `
//       <html>
//       <body>
//           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...">
//           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABA...">
//       </body>
//       </html>
//     `;

//     // Parse the HTML string to extract image sources
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlString;

//     const imgElements = tempElement.getElementsByTagName('img');
//     const sources = [];
//     for (let i = 0; i < imgElements.length; i++) {
//       const src = imgElements[i].getAttribute('src');
//       if (src.startsWith('data:image')) {
//         sources.push(src);
//       }
//     }

//     // Update state with extracted image sources
//     setImageSources(sources);
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <h2>Images from HTML String:</h2>
//       {imageSources.map((src, index) => (
//         <img key={index} src={src} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
//       ))}
//     </div>
//   );
// };

// export default ImageRenderer;

// import React from 'react';

// const HtmlTagDeleter = ({ htmlString, tagToDelete }) => {
//   // Function to delete the specified tag from HTML string
//   const deleteTag = () => {
//     // Create a temporary element to hold the HTML string
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlString;

//     // Select the tag(s) to delete using querySelectorAll
//     const elementsToDelete = tempElement.querySelectorAll(tagToDelete);

//     // Remove each selected element from the temporary DOM structure
//     elementsToDelete.forEach(element => {
//       element.parentNode.removeChild(element);
//     });

//     // Get the updated HTML string after deletion
//     const updatedHtmlString = tempElement.innerHTML;

//     // Display the updated HTML string (for demonstration)
//     console.log('Updated HTML string:', updatedHtmlString);

//     // You can optionally update state or perform further actions with the updated HTML string
//   };

//   return (
//     <div>
//       <h2>HTML Tag Deleter</h2>
//       <button onClick={deleteTag}>Delete {tagToDelete} tag</button>

//       {/* Display the original HTML string (for demonstration) */}
//       <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
//         <h3>Original HTML String:</h3>
//         <pre>{htmlString}</pre>
//       </div>
//     </div>
//   );
// };

// export default HtmlTagDeleter;
