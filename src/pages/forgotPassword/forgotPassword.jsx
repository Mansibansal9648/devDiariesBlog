// Dependencies
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import forgotpasswordSchema from '../../schema/index';

// Components
import Footer from '../../common/footer';
import NavBar from '../../common/navBar';
import './forgotPassword.css';

function ForgotPassword() {
  const initialValues = {
    email: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotpasswordSchema,
    onSubmit: async function (values, action) {
      // await forgotUserPassword(values);

      console.log('Values: ', values);
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
        <form className="fpass-form-container border border-muted px-5 py-4 mx-5">
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
              //  className="form-control mb-2"
              className={
                formik.errors.email && formik.touched.email
                  ? 'border border-danger d-block w-100 p-2 mb-0'
                  : 'border d-block w-100 p-2 mb-0'
              }
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
          <button type="button" className="btn button_style w-100 mt-3" onClick={formik.handleSubmit}>
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
