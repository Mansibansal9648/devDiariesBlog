// Dependencies
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';

// Components
import NavBar from '../../common/navBar';
import Footer from '../../common/footer';
import 'react-toastify/dist/ReactToastify.css';
import {loginSchema} from '../../schema/index';
import './login.css';
// import { loginUser } from '../common/api/authUser';
// import strings from '../../utils/stringConstant';
// import { AppContext } from '../../contextApi/context';

function LogIn() {
  const [showpassword, setShowpassword] = useState(false);
  // const { dispatch } = useContext(AppContext);
  const initialValues = {
    username_email: '',
    password: '',
  };

  // const navigate = useNavigate();
  // const loginInfo = async (user_data) => {
  //   const resp = await loginUser(user_data);
  //   //  console.log(res.data)
  //   if (resp && resp.data.responseCode === 200) {
  //     // console.log("error201", resp.data.data)
  //     toast.success(resp.data.resMessage);

  //     // dispatch({ type: strings.LOG_IN, payload: resp.data.data });
  //     setTimeout(() => {
  //       navigate(`/userpage/${resp.data.data.id}`);
  //     }, 3000);
  //   } else if (resp && resp.data.responseCode === 400) {
  //     //  console.log("error")
  //     toast.error(resp.data.errMessage);
  //   } else {
  //     toast.error('Something went wrong...');
  //   }
  //   return resp;
  // };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async function (values, action) {
      // await loginInfo(values);
      // console.log('Values: ', values);
      action.resetForm();
    },
  });

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  function getMainBody() {
    return (
      <>
        <div className="container  login-page position-relative z-0">
          {getLeftSection()}
          {getRightSection()}
        </div>
      </>
    );
  }

  function getLeftSection() {
    return (
      <div className="left text-center mt-5">
        <div className="pt-5">
          <h2 className="mt-3 mb-3 fs-1 fw-bold heading_text">Welcome back, Developer!</h2>
          <p className="fs-4">We’re excited to see you again! </p>
          <div className="me-5 ms-5">
            <p className="me-5 ms-5 text-muted mt-3">
              "Let’s continue building the future of tech together—log in to share your latest discoveries and explore
              new ideas. Ready to dive into your next coding adventure? Log in to keep sharing your insights, learn from
              fellow developers, and contribute to the <span className="text-warning fs-5">DevDiaries</span> community.
              Your next big breakthrough is just a login away, so share your programming tips, tricks, and experiences
              with the community!"
            </p>
          </div>
        </div>
      </div>
    );
  }

  function getRightSection() {
    return (
      <div className="login form_style">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center mb-5 heading_style">SignIn to Inspire</h2>
          <div className="mb-3">
            <label htmlFor="username_email" className="form-label">
              Email address or User Name
            </label>
            <div>
              <input
                type="text"
                className={
                  formik.errors.username_email && formik.touched.username_email
                    ? 'border border-danger d-block w-100 p-2 mb-0'
                    : 'border d-block w-100 p-2 mb-0'
                }
                id="username_email"
                placeholder="Enter your email or username"
                value={formik.values.username_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username_email && formik.errors.username_email ? (
                <p className="form-error">{formik.errors.username_email}</p>
              ) : null}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="position-relative">
              <input
                type={showpassword ? 'text' : 'password'}
                className={
                  formik.errors.password && formik.touched.password
                    ? 'border border-danger d-block w-100 p-2 mb-0'
                    : 'border d-block w-100 p-2 mb-0'
                }
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FontAwesomeIcon
                icon={showpassword ? faEye : faEyeSlash}
                className="eye-position"
                onClick={togglepasswordVisibility}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="form-error">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="mb-3 form-check">
            <div>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me?
              </label>
              <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
                {' '}
                Forgot password
              </Link>
            </div>
          </div>
          <button type="submit" className="btn button_style w-100">
            SignIn
          </button>
          <div className="mt-2 text-center">
            <p>
              Don't have an account?{' '}
              <Link to="/register" style={{ textDecoration: 'none' }}>
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {getMainBody()}
      <Footer />
    </>
  );
}

export default LogIn;