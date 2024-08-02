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

  const navigate=useNavigate();
  const newUser = async (form_data) => {
    console.log(form_data)
    const res = await createUser(form_data);
    //  console.log(res.data)
    if (res && res.data.responseCode === 201) {
      toast.success(res.data.resMessage);
     setTimeout(()=>{
      navigate('/login');
     },3000) 
    }
    
    else if(res && res.data.responseCode === 400){
      // console.log("error")
      toast.error(res.data.errMessage);
    }
    else{
      toast.error("Something went wrong...")
    }
   return res;
    }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async function (values, action) {
      // const res = await newUser(values);
      await newUser(values);
      // console.log("res", res);
      // console.log("Values: ", values);
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
        <h1 className="heading"> Let's join DevDiaries</h1>
        <p className="text-center w-50 p-3 mx-auto">
          Lorem Ipsum is simply dummy dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>

        <form className="container form" onSubmit={formik.handleSubmit}>
          <div className="contactus">
            <h4>Registration</h4>
          </div>

          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="border w-100 p-2 "
              id="username"
              name="username"
              placeholder="Enter your User Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.username && formik.touched.username ? (
            <p className="form-error">{formik.errors.username}</p>
          ) : null}

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border w-100 p-2 "
              id="name"
              name="name"
              placeholder="Enter your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.name && formik.touched.name ? (
            <p className="form-error">{formik.errors.name}</p>
          ) : null}

          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="border  w-100 p-2 "
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <p className="form-error">{formik.errors.email}</p>
          ) : null}

          <div>
            <label htmlFor="password">Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                className="border  w-100 p-2  "
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="eye-position"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <p className="form-error">{formik.errors.password}</p>
          ) : null}

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              type="password"
              className="border  w-100 p-2 "
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p className="form-error">{formik.errors.confirmPassword}</p>
          ) : null}

          <button type="submit" className="btn btn-primary button">
            Register
          </button>
          <div className="para">
            <p>
              {" "}
              Do you already have an account??{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login Now
              </Link>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;
