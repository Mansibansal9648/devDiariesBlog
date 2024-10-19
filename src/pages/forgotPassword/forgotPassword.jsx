// Dependencies
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../schema/index';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import Footer from '../../common/footer';
import NavBar from '../../common/navBar';

// Api
import { forgotPassword } from '../../api/userApi';

//files
import './forgotPassword.css';

function ForgotPassword() {
  const [timer, setTimer] = useState(0);
  const initialValues = {
    email: '',
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.isLogin) {
      navigate(`/userpage/${user.id}`);
    }
  });

  // Countdown effect
  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const forgotUserPassword = async (user_data) => {
    await forgotPassword(user_data, true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async function (values, action) {
      setTimer(60);
      await forgotUserPassword(values);
      action.resetForm();
    },
  });

  function getMainBody() {
    return (
      <div className="row pt-5 w-100">
        {getLeftSection()};{getRightSection()};
      </div>
    );
  }
  function getLeftSection() {
    return (
      <div class="col-lg-6 col-sm-12 mt-5 text-center py-5 mx-5">
        <h2 className="fw-bold fs-1 px-5 pt-5 mx-5 heading_text">You forgot your password?</h2>
        <p className="fs-3 fw-bold text-muted mt-5">Calm down we will help you !!</p>
        <p className=" px-5 mt-4 text-secondary mx-5">
          No worries! Please enter your email address, and we'll send you instructions to reset your password.
        </p>
      </div>
    );
  }
  function getRightSection() {
    return (
      <div class="col-lg-4 col-sm-12 my-5 px-1">
        <form className="fpass-form-container border border-muted px-5 py-4 mx-5" onSubmit={formik.handleSubmit}>
          <i class="fa-solid fa-lock fs-1 mb-5 text-primary text-center lock-icon"></i>
          <h2 className="text-center mb-3" style={{ color: '#1E4682' }}>
            Trouble logging in?
          </h2>
          <p className="text-muted text-center">
            Enter your email and we'll send you a link to get back into your account.
          </p>
          <div className="">
            <label for="exampleInputPassword1">Email</label>
            <input
              type="email"
              autoComplete="new-password"
              className={
                formik.errors.email && formik.touched.email
                  ? 'border border-danger d-block w-100 p-2 mb-0'
                  : 'border d-block w-100 p-2 mb-0'
              }
              disabled={timer > 0}
              id="exampleInputPassword1"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <p className="form-error mt-0 mb-1 p-1">{formik.errors.email}</p>
          ) : null}
          {timer > 0 && (
            <div className="mt-2 text-center">
              <p className="text-danger mb-0"> Wait {timer} seconds...</p>
            </div>
          )}
          <button type="submit" className="btn button_style w-100 mt-2" disabled={timer > 0}>
            Submit
          </button>

          <div className="mt-4 text-center">
            <p>
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

      <div class="row pt-5 w-100">{getMainBody()};</div>
      <Footer />
    </>
  );
}
export default ForgotPassword;
