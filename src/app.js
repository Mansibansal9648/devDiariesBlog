import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contextApi/context';
import { ToastContainer } from 'react-toastify';

import Home from './components/home/home';
import MyBlog from './components/myBlog/myBlog';
import Register from './components/register/register';
import NotFound from './components/common/notFound/notFound';
import LogIn from './components/login/login';
import PrivateRoute from './components/common/privateRoute/privateRoute';
import BlogDetailPage from './components/blogDetailPage/blogDetailPage';
import UpdatePassword from './components/updatePassword/updatePassword';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import BlogPage from './components/blogsPage/blogPage';
import UserLayoutPage from './components/userDashboard/userLayoutPage';
import NavBar from './components/common/navBar/navBar';
import CreatePost from './components/createPost/createPost';

function App() {
  return (
    <AppProvider>
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
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/updatepassword"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <UpdatePassword />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/forgotpassword"
            element={
              <PrivateRoute>
                <ForgotPassword />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/userpage/:userId"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <MyBlog />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/userpage/:userId/post/blogdetailpage"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <BlogDetailPage />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/userpage/post/:userId"
            element={
              <PrivateRoute>
                <div>
                  <NavBar />
                  <CreatePost />
                </div>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/userpage/post/:postId/edit"
            element={
              <PrivateRoute>
                <div>
                  <NavBar />
                  <CreatePost />
                </div>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/userpage/blogs/:category"
            element={
              <UserLayoutPage>
                <BlogPage isLayout={false} />
              </UserLayoutPage>
            }
          ></Route>
          <Route path="blogs/:category" element={<BlogPage isLayout={true} />}></Route>

          <Route
            path="/myblog"
            element={
              <PrivateRoute>
                <MyBlog />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/blog/:blogId"
            element={
              <PrivateRoute>
                <BlogDetailPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <LogIn />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;