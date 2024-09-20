import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import { createUser } from "../common/api/authUser";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schema/SignUpSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const newUser = async (form_data) => {
    console.log(form_data);
    const res = await createUser(form_data);
    if (res && res.data.responseCode === 201) {
      toast.success(res.data.resMessage);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async function (values, action) {
      await newUser(values);
      action.resetForm();
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavBar />
      <div className="container text-center register-form-container position-relative z-0">
        <div className="row">
          <div className="col mt-5 ">
            <h1
              className="heading mt-3 mb-3 fs-1 fw-bold"
              style={{ color: "#2B3654" }}
            >
              Join DevDiaries Today
            </h1>
            <p className="fs-4">Empower Your Coding Journey!</p>
            <p className="me-5 ms-5 text-muted">
              We’re thrilled to have you join our growing community of
              passionate developers, coders, and tech enthusiasts. At
              DevDiariesBlog, we believe that coding is not just about writing
              lines of code—it's about learning, growing, and sharing
              experiences with like-minded individuals.By becoming a part of our
              community, you’re not just getting access to expert insights and
              tutorials but also becoming a valued contributor to a
              collaborative space where knowledge is freely exchanged. Whether
              you're a seasoned professional or just beginning your journey in
              development, DevDiariesBlog has something for everyone.
            </p>
            <p className="me-5 ms-5 text-muted ">
              Explore in-depth articles, engage in thought-provoking
              discussions, and discover coding tips and tricks tailored to your
              learning needs. Our mission is to empower you with the tools and
              knowledge to take your skills to the next level. So, dive in,
              connect with others, and let’s code, learn, and innovate together.
              Your development journey starts here—and we’re excited to be part
              of it with you!
            </p>
          </div>
          <div className="col">
            <form
              className="container register-form"
              onSubmit={formik.handleSubmit}
            >
              <div className="register">
                <h1 className="text-center mb-4" style={{ color: "#1E4682" }}>
                  Register
                </h1>
              </div>

              <div>
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className={
                    formik.errors.username && formik.touched.username
                      ? "border border-danger register_input  w-100 p-2 "
                      : " border register_input  w-100 p-2"
                  }
                  id="username"
                  name="username"
                  placeholder="Enter your User Name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.username && formik.touched.username ? (
                <p className="form-error mt-0">{formik.errors.username}</p>
              ) : null}

              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "border border-danger register_input  w-100 p-2 "
                      : " border register_input  w-100 p-2"
                  }
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.name && formik.touched.name ? (
                <p className="form-error mt-0">{formik.errors.name}</p>
              ) : null}

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "border border-danger register_input  w-100 p-2 "
                      : " border register_input  w-100 p-2"
                  }
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <p className="form-error mt-0">{formik.errors.email}</p>
              ) : null}

              <div>
                <label htmlFor="password">Password</label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "border border-danger register_input  w-100 p-2 "
                        : " border register_input  w-100 p-2"
                    }
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="eye-position"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <p className="form-error mt-0">{formik.errors.password}</p>
              ) : null}

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>

                <input
                  type="password"
                  className={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "border border-danger register_input  w-100 p-2 "
                      : " border register_input  w-100 p-2"
                  }
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className="form-error mt-0">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}

              <button type="submit" className="btn btn-submit mt-3">
                Register
              </button>
              <div className="para">
                <p>
                  Do you already have an account??
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login Now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
