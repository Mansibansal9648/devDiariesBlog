import { useEffect, useState } from "react";
import { getAllPost } from "../common/api/postApi.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './allBlogs.css'

function AllBlogs() {
  const [post, setPost] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  //console.log("post", post);
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const res = await getAllPost();
    if (res && res.data.responseCode === 200) {
      setPost(res.data.data);

      toast.success(res.data.resMessage);
    } else if (res && res.data.responseCode === 400) {
      //  console.log("error")
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  };
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  function toggleBlogs() {
    setVisibleBlogs((prevVisibleBlogs)=> 
        prevVisibleBlogs === 3 ? post.length : 3
    )
  }
  return (
    <>
    <div style={{padding : "30px"}}>
        <div className="mb-3">
        <span><i class="fa-solid fa-arrow-trend-up fa-2x me-2"></i></span>
            <span className="fw-semibold fs-3">Trending</span>
        </div>
        <div className="row" >
  {post.slice(0, visibleBlogs).map((post, index) => (
    <div className="col-md-3 col-lg-3 mb-4" style={{height: "300px"}} key={index}>
      <div className="card card-common-height d-flex" style={{ width: "100%" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body card_container">
          <h5 className="card-title">{post.title}</h5>
          <p
            dangerouslySetInnerHTML={{
              __html: limitText(post.content, 150) // Limiting content
            }}
            className="my-3"
          />
          <p className="">100k views</p>
         <Link to={`/userpage/blogs/${post.userId}/blogdetailpage}`}><button type="button" className="btn btn-primary">Read More</button></Link>
          
        </div>
      </div>
    </div>
  ))}
 
 
</div>

      {/* show more button */}
      <div className="centered-button-with-line" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      
        <button type="button"  onClick={toggleBlogs}>{visibleBlogs === 4 ? "Show More": "Show Less"}</button>
      </div>
        

      </div>
    </>
  );
}
export default AllBlogs;
