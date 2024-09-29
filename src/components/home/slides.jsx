const slidesContent = [
    {
      content: (
        <div>
          <h2>Welcome to devDiaries</h2>
          <p>Share your knowledge with the world!</p>
        </div>
      ),
      backgroundColor: '#f8c800', // Background color for this slide
    },
    {
      content: (
        <div>
          <h2>Explore Tech Topics</h2>
          <p>Stay updated with the latest in technology.</p>
        </div>
      ),
      backgroundColor: '#1c1c1c', // Background color for this slide
    },
    {
      content: (
        <div>
          <h2>Start Your Blog</h2>
          <button className="create-blog-button" onClick={() => alert('Create Blog Clicked!')}>
            Create Blog
          </button>
        </div>
      ),
      backgroundColor: '#0f0f0f', // Background color for this slide
    },
    {
      content: (
        <div>
          <h2>Join Our Community</h2>
          <p>Be part of the discussion and grow with us.</p>
        </div>
      ),
      backgroundColor: '#333333', // Background color for this slide
    },
  ];
  
  export default slidesContent;
  