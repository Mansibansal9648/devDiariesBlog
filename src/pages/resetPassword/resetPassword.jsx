// Dependencies
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {resetPasswordSchema} from '../../schema/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { useFormik } from 'formik';

// Components
import NavBar from '../../common/navBar';

// API
import { resetPassword } from '../../api/userApi';

//files
import './resetPassword.css';

function ResetPassword() {

  //states
  const [showpassword, setShowpassword] = useState(false);

  const location = useLocation();
   const token = location.pathname.split('/')[2];

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const passwordInfo = async (user_data) => {
    const response = await resetPassword(user_data, true);
    console.log("Reset Password Data:", response);
  }
  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: resetPasswordSchema,
    onSubmit: async function (values, action) {
      await passwordInfo(values, token);
      console.log(values)
      action.resetForm();
    },
  });

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  function getMainBody() {
    return (
      <div class="row py-5 ms-0 w-100 h-100">
        {getLeftSection()}
        {getRightSection()}
      </div>
    );
  }

  function getLeftSection() {
    return (
      <div class="col-lg-6 col-sm-12 mt-5 text-center py-5 mx-5">
        <h1 className="fw-bold px-5 pt-5 mx-5 heading_text">A New Start, a New Password!</h1>
        <p className="fs-3 fw-bold text-muted mt-5">Strengthen Your Shield!</p>
        <p className=" px-5 mt-4 text-secondary mx-5">
          A strong password is your best defense. Make sure it’s unique and hard to guess. Enter and confirm your new
          password, and you’ll be back on track to explore the latest in technology, tools, and career tips.
        </p>
      </div>
    );
  }

  function getRightSection() {
    return (
      <div class="col-lg-4 col-sm-12 my-5 px-1 ">
        <form className=" fpass-form-container border border-muted px-5 py-4 mx-5" onSubmit={formik.handleSubmit}>
          <i class="fa-solid fa-key fs-1 mb-5 text-primary text-center lock-icon"></i>
          <h2 className="text-center mb-3 heading_style">Reset Your Key</h2>
          <div className="mb-3">
            {' '}
            <label for="password">New Password</label>
            <div className="position-relative">
              <input
                type={showpassword ? 'text' : 'password'}
                name="newPassword"
                autoComplete="new-password"
                className={
                  formik.errors.newPassword && formik.touched.newPassword
                    ? 'border border-danger d-block w-100 p-2 mb-0'
                    : 'border d-block w-100 p-2 mb-0'
                }
                id="newPassword"
                placeholder="Enter your password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FontAwesomeIcon
                icon={showpassword ? faEye : faEyeSlash}
                className="eye-position"
                onClick={togglepasswordVisibility}
              />
            </div>
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <p className="form-error mb-0">{formik.errors.newPassword}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label for="confirmPassword">Confirm Password</label>
            <div>
              <input
                type="password"
                className={
                  formik.errors.confirmPassword && formik.touched.confirmPassword
                    ? 'border border-danger d-block w-100 p-2 mb-0'
                    : 'border d-block w-100 p-2 mb-0'
                }
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <p className="form-error mb-0">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>
          </div>
          <button type="submit" className="btn button_style mt-2">
            Submit
          </button>
          <div className="para pt-3">
            <p>
              {' '}
              Do you already have an account?{' '}
              <Link to="/login" className="text-decoration-none">
                Login Now
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
    </>
  );
}
export default ResetPassword;
