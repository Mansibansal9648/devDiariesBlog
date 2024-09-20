import { Link } from "react-router-dom";
import "./updatePassword.css";

function UpdatePassword() {
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
          <form className="container upass-form-container border  px-5 py-4">
            <h1 className="heading ps-2 text-center">DevDiaries</h1>
            <i class="fa-solid fa-key mb-5 text-center key-icon"></i>
            <div className="">
              <label for="exampleInputPassword1">Current Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <div className="">
              <label for="exampleInputPassword1">New Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <div className="">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="ConfirmPassword"
                placeholder="Confirm your password"
              />
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
