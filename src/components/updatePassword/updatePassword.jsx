import { Link } from "react-router-dom";
import "./updatePassword.css";
import { UpdateSchema } from "../../Schema/updateScheme";
import { useFormik } from "formik";

function UpdatePassword() {
  const initialValues = {
    currentPassword : "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UpdateSchema,
    onSubmit:  function (values, action) {
      // await  newUser(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div class="row py-5 ms-0 w-100">
        <div class="col-lg-7 col-sm-12 my-4 px-5">
          <h1 className="fw-bolder ps-5 text-black">
            Enter your new password to update the old password
          </h1>

          <p className="p-5 pe-4 mt-5 text-secondary">
            "Please enter your new password to update your old one. Make sure
            it's at least 8 characters long, includes a mix of letters, numbers,
            and symbols for better security."
          </p>
        </div>
        <div class="custom col-lg-5 col-sm-12 my-4 px-5">
          <form className="container upass-form-container border  px-5 py-4" onSubmit={formik.handleSubmit}>
            <h1 className="heading ps-2 text-center">DevDiaries</h1>
            <i class="fa-solid fa-key mb-5 text-center key-icon"></i>
            <div className="">
              <label for="currentPassword">Current Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-control "
                id="currentPassword"
                placeholder="Enter your password"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.currentPassword && formik.touched.currentPassword ? (
                <p className="form-error mt-0">{formik.errors.currentPassword}</p>
              ) : null}
            </div>
            <div className="">
              <label for="password">New Password</label>
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
              {formik.errors.password && formik.touched.password ? (
                <p className="form-error mt-0">{formik.errors.password}</p>
              ) : null}

            </div>
            <div className="">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="confirmPassword"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
               {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <p className="form-error mt-0">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

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
    </>
  );
}
export default UpdatePassword;
