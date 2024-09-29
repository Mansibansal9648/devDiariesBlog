import NavBar from '../common/navBar/navBar';
import Footer from '../common/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginSchema from '../../schema/loginSchema';
import useCustomDispatch from '../../hooks/useCustomDispatch';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../common/api/authUser';
import strings from '../../utils/stringConstant';
import { useContext } from 'react';
import { AppContext } from '../../contextApi/context';

function LogIn() {
  const [showpassword, setShowpassword] = useState(false);
  const { dispatch } = useContext(AppContext);
  const initialValues = {
    username_email: '',
    password: '',
  };

  const navigate = useNavigate();
  const loginInfo = async (user_data) => {
    const resp = await loginUser(user_data);
    //  console.log(res.data)
    if (resp && resp.data.responseCode === 200) {
      // console.log("error201", resp.data.data)
      toast.success(resp.data.resMessage);

      dispatch({ type: strings.LOG_IN, payload: resp.data.data });
      setTimeout(() => {
        navigate(`/userpage/${resp.data.data.id}`);
      }, 3000);
    } else if (resp && resp.data.responseCode === 400) {
      //  console.log("error")
      toast.error(resp.data.errMessage);
    } else {
      toast.error('Something went wrong...');
    }
    return resp;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async function (values, action) {
      await loginInfo(values);

      console.log('Values: ', values);
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
          <div className="left">
            <h1>this is left side with width 60%</h1>
          </div>

          <div className="login">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-center mb-5">Login</h1>
              <div className="mb-3">
                <label htmlFor="username_email" className="form-label">
                  Email address or User Name
                </label>
                <div>
                  <input
                    type="text"
                    className="border d-block w-100 p-2"
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
                <div className=" position-relative">
                  <input
                    type={showpassword ? 'text' : 'password'}
                    className="border  w-100 p-2 d-flex mb-0"
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
                    Forgot password
                  </Link>
                </div>
              </div>
              <button type="submit" className="btn btn-submit">
                Login
              </button>
              <div className="para">
                <p>
                  Don't have an account?{' '}
                  <Link to="/register" style={{ textDecoration: 'none' }}>
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {getLeftSection()}
        {getRightSection()}
      </>
    );
  }

  function getLeftSection() {}

  function getRightSection() {}

  return (
    <>
      <NavBar />
      {getMainBody()}
      <Footer />
    </>
  );
}

export default LogIn;
