import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import { useFormik } from "formik";
import { forgotPassword } from "../common/api/authUser";
import { toast } from "react-toastify";

function ForgotPassword() {

  const initialValues = {
    email: "",
  };

 

  const forgotUserPassword = async (user_data) => {
    const resp = await forgotPassword(user_data)
    console.log("error", resp);
    if (resp && resp.data.responseCode === 200) {
     //  console.log("error201", resp.data.data)
      toast.success(resp.data.resMessage);

    } else if (resp && resp.data.responseCode === 400) {
      //  console.log("error")
      toast.error(resp.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return resp

  }
  const formik = useFormik({
    initialValues: initialValues,
   // validationSchema: loginSchema,
    onSubmit: async function (values, action) {
      await forgotUserPassword(values);

      console.log("Values: ", values);
      action.resetForm();
    },
  });

  return (
    <>
      <NavBar />
      <div class="row pt-5 w-100">
        <div class="col-lg-6 col-sm-12 mt-5 text-center py-5 mx-5">
          <h1 className="fw-bold px-5 pt-5 mx-5">
            You forgot your password?
          </h1>
          <p className="fs-3 fw-bold text-muted mt-5">Calm down we will help you !!</p>
          <p className=" px-5 mt-4 text-secondary mx-5">
          No worries! Please enter your email address, and we'll send you instructions to reset your password.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 my-5 px-1">
          <form className=" fpass-form-container border border-muted px-5 py-4 mx-5">
          <i class="fa-solid fa-lock fs-1 mb-5 text-primary text-center lock-icon"></i>
            <h3 className="text-center">Trouble logging in?</h3>
            <p className="text-muted text-center">Enter your email and we'll send you a link to get back into your account.</p>
            <div className="mb-3">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
            </div>

            <button type="button" className="btn btn-primary reset-button" onClick={formik.handleSubmit}>
              Reset Password
            </button>
            <div className="para pt-3">
              <p>
                Do you already have an account??{" "}
                <Link to="/login" className="text-decoration-none">
                  Login Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default ForgotPassword;
