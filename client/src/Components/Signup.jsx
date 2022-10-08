import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form ">
              <h2 className="form-title">Sign Up</h2>
              <form action="" className="register-form" id="register-form">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your name"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </span>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your mobile number"
                    className="form-control"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </span>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your Profession"
                    className="form-control"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </span>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Register"
                    className="form-submit btn btn-outline-success"
                    name="signup"
                    id="signup"
                  />
                </div>
              </form>
            </div>
            <div>
              <NavLink to="/login">Already have account? </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
