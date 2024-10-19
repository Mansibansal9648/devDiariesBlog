// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Home from './pages/home/home';
import Register from './pages/register/register';
import LogIn from './pages/login/login';
import ResetPassword from './pages/resetPassword/resetPassword';
import UserLayout from './common/userLayout';
import MyBlog from './pages/post/component/myBlog';
import NotFound from './common/notFound';
import PrivateRoute from './common/privateRoute';

// ----------------------------------------------------------------
import UpdatePassword from './pages/updatePassword/updatePassword';
import ForgotPassword from './pages/forgotPassword/forgotPassword';

function App() {
  return (
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
          <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
          <Route path="/updatepassword" element={<UpdatePassword />}></Route>

          <Route
            path="/userpage/:userId"
            element={
              <PrivateRoute>
                <UserLayout>
                  <MyBlog />
                </UserLayout>
              </PrivateRoute>
            }
          ></Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
