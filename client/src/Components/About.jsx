import React, { useEffect } from "react";
import pic from "../Assets/gojo.png";
import { useNavigate   } from "react-router-dom";


const About = () => {

  const callAboutPage = async () => {
    try{
      const res = await fetch('/about',{
        method:"GET",
        headers : {
          Accept: "application/json",
          "Content-type" : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    callAboutPage();
  }, []);
  return (
    <>
      <div className="container  mt-5 border">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 ">
              <img
                className="rounded-circle bg-dark"
                width="300"
                src={pic}
                alt="ProfilePic"
              />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Vivek Chaprana</h5>
                <h6 className="text-primary">Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile"
                      className="nav-link "
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button className=" btn btn-outline-secondary">
                Edit Profile
              </button>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work mt-4">
                  <p>WORK LINKS : </p>
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 btn btn-outline-primary  "
                  >
                    Github
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 btn btn-outline-primary  "
                  >
                    Youtube
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 btn btn-outline-primary  "
                  >
                    Instagram
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 btn btn-outline-primary  "
                  >
                    LinkedIn{" "}
                  </a>{" "}
                  <br />
                </div>
              </div>

              {/* Right side data toggle */}
              <div className="col-md-8 ps-5 about-info">
                <div className="tab-content profile-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6 ">
                        <label>User ID</label>
                      </div>
                      <div className="text-primary col-md-6">124568975236</div>
                      <div className="col-md-6 mt-3">
                        <label>Name</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">
                        Vivek Chaprana
                      </div>
                      <div className="col-md-6 mt-3">
                        <label>Email</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">
                        vicky@huehue.com
                      </div>
                      <div className="col-md-6 mt-3">
                        <label>Phone</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">
                        9968547320
                      </div>
                      <div className="col-md-6 mt-3">
                        <label>Profession</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">
                        Web Developer
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade  "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6 ">
                        <label>Experience</label>
                      </div>
                      <div className="text-primary col-md-6">VETERAN</div>
                      <div className="col-md-6 mt-3">
                        <label>Language</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">
                        English, Hindi.
                      </div>
                      <div className="col-md-6 mt-3">
                        <label>Total Projects</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">10</div>
                      <div className="col-md-6 mt-3">
                        <label>Availability</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">Yes</div>
                      <div className="col-md-6 mt-3">
                        <label>Work Location</label>
                      </div>
                      <div className="text-primary mt-3 col-md-6">Hybrid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
