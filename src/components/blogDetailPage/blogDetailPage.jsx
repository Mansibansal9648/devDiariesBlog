import { useLocation } from "react-router-dom";
import "./blogDetailPage.css";
import { useAppContext } from "../../contextApi/context";


function BlogDetailPage() {
 const location = useLocation()
 const {store:{user}}=useAppContext();
 const post = location.state
//  console.log("postd", post)

  return (
    <>
      <div className="container blogDetail_container">
        <div className="row">
          <div className="col-md-8 blogdetail_box">
            <div className="category">
            <h1>
              {post.title}
            </h1>
            
            </div>
            <div className="bg-danger ">
            <h2 className="mt-3">
              {post.title}
            </h2>
             
            
            <hr />
            <div className="user_details">
              
              <div className="blog_details">
                <p className="fs-5 "> By {user.name}</p>
                <p>UPDATED: {post.updatedAt.split("GMT")[0]}</p>
              </div>
              </div>
              <hr />

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
