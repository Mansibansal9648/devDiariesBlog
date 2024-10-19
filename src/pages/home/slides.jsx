import slide1 from './tech.mp4';
const slidesContent = [
  {
    content: (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // This helps maintain the aspect ratio and fill the area
            position: 'absolute', // Make sure the video is positioned absolutely
            top: 0, // Align the video to the top
            left: 0, // Align the video to the left
          }}
        >
          <source src={slide1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the content
            zIndex: 1, // Make sure the content is above the video
            color: '#fff',
            textAlign: 'center', // Center the text
            padding: '20px', // Optional padding for better spacing
          }}
        >
          <h2>Welcome to devDiaries</h2>
          <p>Share your knowledge with the world!</p>
          <p>Share your knowledge with the world!</p>
          <p>Share your knowledge with the world!</p>
          <p>Share your knowledge with the world!</p>
          <p>Share your knowledge with the world!</p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div
        style={{
          backgroundImage: `url('https://www.nti-audio.com/Portals/0/EasyDNNnews/511/Job_PC_Software_Developer.jpg')`,
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center',
          height: '100vh', // Set height for the slide
          display: 'flex', // Use flexbox to center the content
          flexDirection: 'column', // Arrange content in a column
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          color: '#ffffff', // Text color for better visibility
          textAlign: 'center', // Center the text
          padding: '20px', // Optional padding
          width: '100%',
        }}
      >
        <h2>Explore Tech Topics</h2>
        <p>Stay updated with the latest in technology.</p>
      </div>
    ),
    backgroundColor: '#1c1c1c', // Background color for this slide
  },
  {
    content: (
      <div
        style={{
          backgroundImage: `url('https://st3.depositphotos.com/1008648/18362/i/450/depositphotos_183620570-stock-photo-businessman-connecting-tech-devices-and.jpg')`, // Specify the path to your image
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center', // Center the image
          height: '100vh', // Set height for the slide
          display: 'flex', // Use flexbox to center the content
          flexDirection: 'column', // Arrange content in a column
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          color: '#ffffff', // Text color for better visibility
          textAlign: 'center', // Center the text
          padding: '20px', // Optional padding
          width: '100%',
        }}
      >
        <h2>Start Your Blog</h2>
        <button className="create-blog-button" onClick={() => alert('Create Blog Clicked!')}>
          Create Blog
        </button>
      </div>
    ),
  },
  {
    content: (
      <div
        style={{
          backgroundImage: `url('https://st3.depositphotos.com/1008648/18362/i/450/depositphotos_183620570-stock-photo-businessman-connecting-tech-devices-and.jpg')`, // Specify the path to your image
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center', // Center the image
          height: '100vh', // Set height for the slide
          display: 'flex', // Use flexbox to center the content
          flexDirection: 'column', // Arrange content in a column
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          color: '#ffffff', // Text color for better visibility
          textAlign: 'center', // Center the text
          padding: '20px', // Optional padding
          width: '100%',
        }}
      >
        <h2>Join Our Community</h2>
        <p>Be part of the discussion and grow with us.</p>
      </div>
    ),
    backgroundColor: '#333333', // Background color for this slide
  },
];

export default slidesContent;
