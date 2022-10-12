import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {userContext} from '../App'
import LoginImg from '../Assets/login.jpg'

const Login = () => {
 // eslint-disable-next-line
  const {state, dispatch} = useContext(userContext);


  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (res.status === 401 || !res) {
      window.alert("Invalid Credentials.");
      console.error("Invalid Credentials.");
    } else if (res.status === 403) {
      window.alert("Please fill all the fields.");
    } else if (res.status === 500 || res.status === 404) {
      window.alert("Invalid Credentials.");
      console.error("Error 500 \n Failed to Sign In, Please try again later.");
    } else {
      dispatch({type:"USER", payload:true});
      window.alert("Login Sucessfull.");
      console.info("Login Sucessfull.");
      history("/");
    }
  };

  return (
    <>


      <section className="signup">
        <div className=" row border signupWrap">
          <div className="signup-content col-md-6">
            <div className="signup-form ">
              <h2 className="form-title mb-4 mt-2">Sign In</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="input-group mb-4 mt-5 ">
                  <labe className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </labe>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </span>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group form-button ">
                  <input
                    onClick={loginUser}
                    type="submit"
                    value="Log In"
                    className="orm-submit btn btn-outline-primary"
                    name="signup"
                    id="signup"
                  />
                </div>
                <br />
                <div className="additionalLogin">
                  <NavLink  style={{ textDecoration: 'none' }} >
                  <p className="link">
                  Forgot password ?
                  </p>
                  </NavLink>
                  <p className="d-flex mt-4">Don't have an account ?<NavLink style={{ textDecoration: 'none', padding: '0 0 0 5px' }}  to='/signup'>
                  <p className="link">
                  Sign Up
                  </p>
                  </NavLink></p>
                </div>
              </form>
            </div>
          </div>
          <div className="loginImgDiv col-md-6 ">
          <img src={LoginImg} alt="" className="loginImage" />

          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

            // <div>
            //   <NavLink to="/signup">Create an account. </NavLink>
            // </div>