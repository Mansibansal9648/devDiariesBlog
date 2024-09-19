import NavBar from "../common/navBar/navBar";
import Footer from "../common/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../../Schema/loginSchema";
import useCustomDispatch from "../../hooks/useCustomDispatch";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../common/api/authUser";
import strings from "../../utils/constant/stringConstant";
import { useContext } from "react";
import { AppContext } from "../../contextApi/context";

function LogIn() {
  const [showpassword, setShowpassword] = useState(false);
  const { dispatch } = useContext(AppContext);
  const initialValues = {
    username_email: "",
    password: "",
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
      toast.error("Something went wrong...");
    }
    return resp;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async function (values, action) {
      await loginInfo(values);

      console.log("Values: ", values);
      action.resetForm();
    },
  });

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  return (
    <>
      <NavBar />
      <div className="container  login-page position-relative z-0">
        <div className="left text-center mt-5">
        <h6 className="fs-1 fw-bold mt-5 mb-4">Welcome back, Developer!</h6>
            <p className="fs-4">We’re excited to see you again! </p>
            <p className="me-5 ms-5 text-muted mt-3">"Let’s continue building the future of tech together—log in to share your latest discoveries and explore new ideas. Ready to dive into your next coding adventure? Log in to keep sharing your insights, learn from fellow developers, and contribute to the <span className="text-warning fs-5">DevDiaries</span> community. Your next big breakthrough is just a login away, so share your programming tips, tricks, and experiences with the community!"</p>
        </div>

        <div className="login">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-center mb-5" style={{color: "#1E4682"}}>Login</h1>
            <div className="mb-3">
              <label htmlFor="username_email" className="form-label">
                Email address or User Name
              </label>
              <div>
                <input
                  type="text"
                  className= {formik.touched.username_email &&
                    formik.errors.username_email ? "border border-danger register_input  d-block w-100 p-2" : "border register_input  d-block w-100 p-2" }
                  id="username_email"
                  placeholder="Enter your email or username"
                  value={formik.values.username_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username_email &&
                formik.errors.username_email ? (
                  <p className="form-error mt-0">{formik.errors.username_email}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className=" position-relative">
                <input
                  type={showpassword ? "text" : "password"}
                  className={formik.touched.password && formik.errors.password ? "border border-danger  w-100 p-2 d-flex mb-0" : "border  w-100 p-2 d-flex mb-0" }
                  id="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
                  icon={showpassword ? faEyeSlash : faEye }
                  className="eye-position"
                  onClick={togglepasswordVisibility}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="form-error mt-2">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="mb-3 form-check">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me?
                </label>
                {" "}
                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                  Forgot password
                </Link>
              </div>
            </div>
            <button type="submit" className="btn btn-submit">
              Login
            </button>
            <div className="para">
              <p>
                Don't have an account?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LogIn;
