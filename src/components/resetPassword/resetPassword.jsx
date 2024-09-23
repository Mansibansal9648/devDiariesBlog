// import Footer from "../common/footer/footer";
// import NavBar from "../common/navBar/navBar";
import { Link, useLocation } from "react-router-dom";
import "./resetPassword.css";
import {  ResetSchema } from "../../Schema/resetSchema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { resetPassword } from "../common/api/authUser";

function ResetPassword() {
  const location = useLocation();
  const token = location.pathname.split("/")[2]
  console.log (token);
  const initialValues = {
    newPassword : "",
    confirmPassword : "",
  }

  const passInfo = async (user_data, token)=> {
    const res = await resetPassword(user_data, token);
    if (res && res.data.responseCode === 200) {
      // console.log("error201", resp.data.data)
      toast.success(res.data.resMessage);

      
    } else if (res && res.data.responseCode === 400) {
      //  console.log("error")
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    return res;
  }
  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: ResetSchema,
    onSubmit:  async function (values, action) {
     await passInfo(values, token);
      console.log("values", values);
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
              <label for="password">New Password</label>
              <input
                type="password" name="newPassword"
                autoComplete="new-password"
                className={
                  formik.errors.newPassword && formik.touched.newPassword
                    ? "border border-danger register_input  w-100 p-2 "
                    : " border register_input  w-100 p-2"
                }
                id="newPassword"
                placeholder="Enter your password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.newPassword &&
              formik.touched.newPassword ? (
                <p className="form-error mt-0">
                  {formik.errors.newPassword}
                </p>
              ) : null}
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border border-danger register_input  w-100 p-2 "
                  : " border register_input  w-100 p-2"
              }
              id="confirmPassword" name="confirmPassword"
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
