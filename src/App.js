// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AppProvider } from './contextApi/context';
import { ToastContainer } from 'react-toastify';

// Components
import Home from './pages/home/home';
// import MyBlog from './components/myBlog/myBlog';
import Register from './pages/register/register';
import LogIn from './pages/login/login';
import ResetPassword from './pages/resetPassword/resetPassword';
import NotFound from './common/notFound';

// ----------------------------------------------------------------
//import PrivateRoute from './components/common/privateRoute/privateRoute';
// import BlogDetailPage from './components/blogDetailPage/blogDetailPage';
import UpdatePassword from './pages/updatePassword/updatePassword';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
// import BlogPage from './components/blogsPage/blogPage';
// import UserLayoutPage from './components/userDashboard/userLayoutPage';
// import NavBar from './components/common/navBar/navBar';
// import CreatePost from './components/createPost/createPost';

function App() {
  return (
    // <AppProvider>
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/blogs" element={<h1>Blogs</h1>}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/reset-password/:id" element={<ResetPassword />}></Route>

          <Route path="/updatepassword" element={<UpdatePassword />}></Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </AppProvider> */}
    </>
  );
}

export default App;
