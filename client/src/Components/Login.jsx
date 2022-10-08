import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form ">
              <h2 className="form-title">Sign In</h2>
              <form action="" className="register-form" id="register-form">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
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
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
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
                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Log In"
                    className="orm-submit btn btn-outline-primary"
                    name="signup"
                    id="signup"
                  />
                </div>
              </form>
            </div>
            <div>
              <NavLink to="/signup">Create an account. </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
