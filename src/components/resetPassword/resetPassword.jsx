// import Footer from "../common/footer/footer";
// import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import "./resetPassword.css";
import {  ResetSchema } from "../../Schema/resetSchema";
import { useFormik } from "formik";

function ResetPassword() {
  const initialValues = {
    password : "",
    confirmPassword : "",
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ResetSchema,
    onSubmit:  function (values, action) {
     // await newUser(values);
      action.resetForm();
    },
  });
 
  return (
    <>
      {/* <NavBar /> */}
      <div class="row py-5 ms-0 w-100">
        <div class="col-lg-7 col-sm-12 my-4">
          <h1 className="fw-bolder ps-5 text-black">
            Enter your new password to update the old password
          </h1>

          <p className="p-5 pe-4 mt-5 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            cumque suscipit rem nisi impedit rerum ad. Sed voluptatem tempora
            delectus unde modi harum nesciunt rerum labore ratione? Ex maiores,
            tempore officia ea tenetur
          </p>
        </div>
        <div class="custom col-lg-5 col-sm-12 my-4 px-1">
          <form
            className=" form-container border border-dark p-5 mx-2"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="heading ps-2 text-center">DevDiaries</h1>
            <div className="mb-3">
              {" "}
              <label for="password">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "border border-danger register_input  w-100 p-2 "
                    : " border register_input  w-100 p-2"
                }
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.password &&
              formik.touched.password ? (
                <p className="form-error mt-0">
                  {formik.errors.password}
                </p>
              ) : null}
            <label for="confirmPassword"> Password</label>
            <input
              type="password"
              className={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border border-danger register_input  w-100 p-2 "
                  : " border register_input  w-100 p-2"
              }
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className="form-error mt-0">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            <button type="submit" className="btn btn-primary button">
              Submit
            </button>
            <div className="para pt-3">
              <p>
                {" "}
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
export default ResetPassword;
