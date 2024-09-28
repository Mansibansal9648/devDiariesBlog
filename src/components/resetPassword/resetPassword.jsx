// import Footer from "../common/footer/footer";
import NavBar from '../common/navBar/navBar';
import { Link, useLocation } from 'react-router-dom';
import './resetPassword.css';
import { ResetSchema } from '../../Schema/resetSchema';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { resetPassword } from '../common/api/authUser';

function ResetPassword() {
  const location = useLocation();
  const token = location.pathname.split('/')[2];
  console.log(token);
  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const passInfo = async (user_data, token) => {
    const res = await resetPassword(user_data, token);
    if (res && res.data.responseCode === 200) {
      // console.log("error201", resp.data.data)
      toast.success(res.data.resMessage);
    } else if (res && res.data.responseCode === 400) {
      //  console.log("error")
      toast.error(res.data.errMessage);
    } else {
      toast.error('Something went wrong...');
    }
    return res;
  };
  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: ResetSchema,
    onSubmit: async function (values, action) {
      await passInfo(values, token);
      console.log('values', values);
      action.resetForm();
    },
  });

  return (
    <>
      <NavBar />
      <div class="row py-5 ms-0 w-100">
        <div class="col-lg-6 col-sm-12 mt-5 text-center py-5 mx-5">
          <h1 className="fw-bold px-5 pt-5 mx-5">A New Start, a New Password!</h1>
          <p className="fs-3 fw-bold text-muted mt-5">Strengthen Your Shield!</p>
          <p className=" px-5 mt-4 text-secondary mx-5">
            A strong password is your best defense. Make sure it’s unique and hard to guess. Enter and confirm your new
            password, and you’ll be back on track to explore the latest in technology, tools, and career tips.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 my-5 px-1">
          <form className=" fpass-form-container border border-muted px-5 py-4 mx-5" onSubmit={formik.handleSubmit}>
            <i class="fa-solid fa-key fs-1 mb-5 text-primary text-center lock-icon"></i>
            <h3 className="text-center mb-3" style={{ color: '#1E4682' }}>
              Reset Your Key
            </h3>
            <div className="mb-1">
              {' '}
              <label for="password">New Password</label>
              <input
                type="password"
                name="newPassword"
                autoComplete="new-password"
                className={
                  formik.touched.newPassword && formik.errors.newPassword
                    ? 'border border-danger login_input  d-block w-100 p-2'
                    : 'border login_input  d-block w-100 p-2'
                }
                id="newPassword"
                placeholder="Enter your password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <p className="form-error mt-0 mb-2">{formik.errors.newPassword}</p>
            ) : null}
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border border-danger login_input  d-block w-100 p-2'
                  : 'border login_input  d-block w-100 p-2'
              }
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <p className="form-error mt-0 mb-2">{formik.errors.confirmPassword}</p>
            ) : null}
            <button type="submit" className="btn btn-submit mt-2">
              Submit
            </button>
            <div className="para pt-3">
              <p>
                {' '}
                Do you already have an account??{' '}
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
