import React, { useEffect, useState } from "react";
import pic from "../Assets/gojo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (res.status !== 200) {
        history("/login");
        console.error(res.error);
      }
    } catch (err) {
      console.log(err);

      history("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container bg-white  mt-5 p-3">
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
              <div className=" profile-head">
                <h5 className="form-title fs-2 fw-bolder">{userData.name}</h5>
                <h6 className="text-primary fs-4">{userData.work}</h6>
                <p className="profile-rating mt-2 mb-5 fs-5">
                  RANKINGS: <span className="text-primary fw-bolder">1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      className="nav-link active fs-5"
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
                      className="nav-link  fs-5"
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
                <div className="profile-work d-flex flex-column justify-content-evenly col-md-3 mt-4">
                  <p>WORK LINKS : </p>
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  github "
                  >
                    Github
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none twitter  "
                  >
                    Twitter
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 insta "
                  >
                    Instagram
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.github.com/vivek-chaprana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none  my-1 linkedin "
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
                      <div className="fs-6 col-md-6 ">
                        <label>User ID : </label>
                      </div>
                      <div className="fw-bolder text-primary col-md-6">
                        {userData._id}
                      </div>
                      <div className="fs-6 col-md-6 mt-3">
                        <label>Name : </label>
                      </div>
                      <div className="fw-bolder text-primary mt-3 col-md-6">
                        {userData.name}
                      </div>
                      <div className="fs-6 col-md-6 mt-3">
                        <label>Email : </label>
                      </div>
                      <div className="fw-bolder text-primary mt-3 col-md-6">
                        {userData.email}
                      </div>
                      <div className="fs-6 col-md-6 mt-3">
                        <label>Phone : </label>
                      </div>
                      <div className="fw-bolder text-primary mt-3 col-md-6">
                        {userData.phone}
                      </div>
                      <div className="fs-6 col-md-6 mt-3">
                        <label>Profession : </label>
                      </div>
                      <div className="fw-bolder text-primary mt-3 col-md-6">
                        {userData.work}
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
                      <div className="col-md-6  fs-6">
                        <label>Experience : </label>
                      </div>
                      <div className="text-primary col-md-6 fw-bolder">VETERAN</div>
                      <div className="col-md-6 mt-3 fs-6">
                        <label>Language : </label>
                      </div>
                      <div className="text-primary mt-3 col-md-6 fw-bolder">
                        English, Hindi.
                      </div>
                      <div className="col-md-6 mt-3 fs-6">
                        <label>Total Projects : </label>
                      </div>
                      <div className="text-primary mt-3 col-md-6 fw-bolder">10</div>
                      <div className="col-md-6 mt-3 fs-6">
                        <label>Availability : </label>
                      </div>
                      <div className="text-primary mt-3 col-md-6 fw-bolder">Yes</div>
                      <div className="col-md-6 mt-3 fs-6">
                        <label>Work Location : </label>
                      </div>
                      <div className="text-primary mt-3 col-md-6 fw-bolder">Hybrid</div>
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
