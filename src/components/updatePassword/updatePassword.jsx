// import Footer from "../common/footer/footer";
// import NavBar from "../common/navBar/navBar";
import { Link } from 'react-router-dom';
import './updatePassword.css';

function UpdatePassword() {
  return (
    <>
      {/* <NavBar /> */}
      <div class="row py-5 ms-0 w-100">
        <div class="col-lg-7 col-sm-12 my-4">
          <h1 className="fw-bolder ps-5 text-black">Enter your new password to update the old password</h1>

          <p className="p-5 pe-4 mt-5 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque suscipit rem nisi impedit rerum ad.
            Sed voluptatem tempora delectus unde modi harum nesciunt rerum labore ratione? Ex maiores, tempore officia
            ea tenetur
          </p>
        </div>
        <div class="custom col-lg-5 col-sm-12 my-4 px-1">
          <form className=" form-container border border-dark p-5 mx-2">
            <h1 className="heading ps-2 text-center">DevDiaries</h1>
            <div className="mb-3">
              {' '}
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="ConfirmPassword" placeholder="Confirm your password" />

            <button type="submit" className="btn btn-primary button">
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
export default UpdatePassword;
