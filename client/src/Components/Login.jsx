import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin",{
      method : "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({
        email, password
      })
    });
    console.log(res)
    if(res.status === 401 || !res){
      window.alert("Invalid Credentials.")
      console.error("Invalid Credentials.")
    }else if(res.status === 403){
      window.alert("Please fill all the fields.")
    }else if(res.status ===  500 || res.status === 404){
      window.alert("Invalid Credentials.")
      console.error("Error 500 \n Failed to Sign In, Please try again later.")
    }else{
      window.alert("Login Sucessfull.")
      console.info("Login Sucessfull.")
      history("/")
    }
  }


  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form ">
              <h2 className="form-title">Sign In</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </span>
                  <input
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
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
                    onClick={loginUser}
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

export default Login;
