import { useLocation } from 'react-router-dom';
import './blogDetailPage.css';
import profilePic from '../../assets/images/profile.png';
import { useAppContext } from '../../contextApi/context';

function BlogDetailPage() {
  const location = useLocation();
  const {
    store: { user },
  } = useAppContext();
  const post = location.state;
  //  console.log("postd", post)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <h1>{post.title}</h1>
            <h5 className="text-secondary">
              From expanding access to quality mental health care to fostering community and peer support to avoiding
              burnout through early intervention, there is much we can do to foster mental wellbeing
            </h5>
            <hr />
            <div className="user_details">
              <div className="bd_profile_pic">
                <img src={profilePic} className="img-fluid" alt="" />
              </div>
              <div className="blog_details">
                <h6 className="fs-5 pb-3"> BY {user.name.toUpperCase()}</h6>
                <h6>UPDATED: {post.updatedAt.split('GMT')[0]}</h6>
              </div>
            </div>
            <hr />

            <div className="content mt-5">
              <img
                src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2024/06/shutterstock_1945115515_BG.jpg"
                alt=""
                className="img-fluid"
              />

              <div dangerouslySetInnerHTML={{ __html: post.content }} className="my-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogDetailPage;
