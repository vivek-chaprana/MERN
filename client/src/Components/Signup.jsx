import React, { useState } from "react";
import { NavLink, useNavigate   } from "react-router-dom";
import RegisterImg from '../Assets/register.png'

const Signup = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({...userData,[name]:value});
  }
  const postData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = userData;

    const res = await fetch("/register",{
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    if(res.status === 422 || !res){
      window.alert("Registration failed.")
      console.error("Invalid registration.")
    } else if(res.status === 409){
      window.alert("User already exists.")
      console.error("User already exists.")
    }
    else{
      window.alert("Registration successful.")
      console.info("Registration successful.")
      history("/login")
    }

    
  }

  return (
    <>
      <section className="signup">
        <div className="row signupWrap border">
          <div className="signup-content col-md-6 ">
            <div className="signup-form ">
              <h2 className="form-title mb-4">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.name}
                    onChange={handleInputs}
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your name"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.email}
                    onChange={handleInputs}
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
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.phone}
                    onChange={handleInputs}
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your mobile number"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.work}
                    onChange={handleInputs}
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your Profession"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.password}
                    onChange={handleInputs}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </span>
                  <input
                  required
                  value={userData.cpassword}
                    onChange={handleInputs}
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>

                <div className="form-group form-button mt-3">
                  <input
                  onClick={postData}
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
            <p className="d-flex mt-4">Already have account?
              <NavLink style={{textDecoration:'none'}}  to="/login"> 
              <p className="link ps-1">Sign In</p>
              </NavLink>
            </p>
            </div>
          </div>
          <div className="loginImgDiv col-md-6">
            <img src={RegisterImg} className="loginImage" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
