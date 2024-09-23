import { useLocation } from "react-router-dom";
import "./blogDetailPage.css";
import { useAppContext } from "../../contextApi/context";


function BlogDetailPage() {
 const location = useLocation()
 const {store:{user}}=useAppContext();
 const post = location.state
  console.log("postd", post)

  return (
    <>
      <div className="container blogDetail_container">
        <div className="row">
          <div className="col-md-8 blogdetail_box">
            <div className="category">
            <p className="fw-bolder fs-2">
              {post.category}
            </p>
            
            </div>
            <div className="blog_content ">
            <h2 className="mt-3">
              {post.title}
            </h2>
             
            
        
            <div className="user_details">
              
              <div className="blog_details">
                <p className="fs-6 username mb-0"> By <span style={{fontStyle: "italic"}}>{user.name}</span></p>
                <p className="text-danger">UPDATED: {post.updatedAt.split("GMT")[0]}</p>
              </div>
              </div>
             

              <div className="content mt-2">
                

                <div dangerouslySetInnerHTML={{__html:post.content}} className="my-3"/>
              </div>
              </div>
          </div>
        </div>
       
      </div>
      
    </>
  );
}
export default BlogDetailPage;
