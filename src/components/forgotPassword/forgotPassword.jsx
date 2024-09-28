import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';
import { Link } from 'react-router-dom';
import './forgotPassword.css';
import { useFormik } from 'formik';
import { forgotPassword } from '../common/api/authUser';
import { toast } from 'react-toastify';
import { forgotSchema } from '../../Schema/forgotSchema';
import { useState } from 'react';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const initialValues = {
    email: '',
  };

  const forgotUserPassword = async (user_data) => {
    setLoading(true);
    const resp = await forgotPassword(user_data);
    console.log('error', resp);
    if (resp && resp.data.responseCode === 200) {
      //  console.log("error201", resp.data.data)
      toast.success(resp.data.resMessage);
      startTimer();
    } else if (resp && resp.data.responseCode === 400) {
      //  console.log("error")
      toast.error(resp.data.errMessage);
    } else {
      toast.error('Something went wrong...');
    }
    setLoading(false);
    return resp;
  };
  const startTimer = () => {
    setTimer(60); // Set timer for 60 seconds
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0; // Stop at 0
        }
        return prev - 1; // Decrease timer
      });
    }, 1000); // Decrease every second
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotSchema,
    onSubmit: async function (values, action) {
      await forgotUserPassword(values);

      console.log('Values: ', values);
      action.resetForm();
    },
  });

  return (
    <>
      <NavBar />
      <div class="row pt-5 w-100">
        <div class="col-lg-6 col-sm-12 mt-5 text-center py-5 mx-5">
          <h1 className="fw-bold px-5 pt-5 mx-5">You forgot your password?</h1>
          <p className="fs-3 fw-bold text-muted mt-5">Calm down we will help you !!</p>
          <p className=" px-5 mt-4 text-secondary mx-5">
            No worries! Please enter your email address, and we'll send you instructions to reset your password.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 my-5 px-1">
          <form className=" fpass-form-container border border-muted px-5 py-4 mx-5">
            <i class="fa-solid fa-lock fs-1 mb-5 text-primary text-center lock-icon"></i>
            <h3 className="text-center mb-3" style={{ color: '#1E4682' }}>
              Trouble logging in?
            </h3>
            <p className="text-muted text-center">
              Enter your email and we'll send you a link to get back into your account.
            </p>
            <div className="">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                autoComplete="new-password"
                className="form-control mb-2"
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
            <button
              type="button"
              className="btn btn-submit mt-2"
              disabled={loading || timer > 0}
              onClick={formik.handleSubmit}
            >
              {loading ? 'Loading...' : 'Reset Password'}
            </button>
            <p style={{ textAlign: 'center', marginTop: '5px' }} className="text-success">
              {' '}
              {timer > 0 ? `Wait ${timer}s` : ''} {/* Show countdown */}
            </p>
            <div className="para pt-3">
              <p>
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
export default ForgotPassword;
