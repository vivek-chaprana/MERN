import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });

  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

      if (res.status !== 200) {
        console.error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callContactPage();
    // eslint-disable-next-line
  }, []);

  //Storing data in state
  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value});

  }
  //Sending data to backend
  const sendData = async (e) => {
  e.preventDefault();

  const {name, email, phone, message} = userData;

  const res = await fetch('/contact',{
    method: "POST",
    headers : {
      "Content-type" :  "application/json"
    },
    body: JSON.stringify({
      name, email, phone, message
    })
  })
  const data = await res.json();
  
  if(!data){
    console.error("Message not sent.")
  }else{
    window.alert("Message sent successfully.")
    setUserData({...userData, message:""})
  }

}

  return (
    <>
      <div className="contact-info border mx-5">
        <div className="container-fluid ">
          <div className="row">
            <div className=" d-flex justify-content-between ">
              {/* Phone */}
              <div className="contact-info-item d-flex justify-content-start align-item-center border border-primary">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Phone</div>
                  <div className="contact-info-text">+91 1111 543 2198</div>
                </div>
              </div>
              {/* Phone */}
              <div className="contact-info-item d-flex justify-content-start align-item-center border border-primary">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Email</div>
                  <div className="contact-info-text">vicky@huehue.com</div>
                </div>
              </div>
              {/* Phone */}
              <div className="contact-info-item d-flex justify-content-start align-item-center border border-primary">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Address</div>
                  <div className="contact-info-text">New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 ">
        <form method="POST">
          <h2>Get In Touch</h2>

          <div className="row my-3">
            <div className="col">
              <input
              name="name"
                type="text"
                className="form-control"
                placeholder="Your Name"
                aria-label="Name"
                required
                onChange={handleInput}
                value={userData.name}
              />
            </div>
            <div className="col">
              <input
              name="email"
                type="email"
                className="form-control"
                placeholder="Your Email"
                aria-label="Email"
                onChange={handleInput}
                value={userData.email}
                required
              />
            </div>
            <div className="col">
              <input
              name="number"
                type="number"
                className="form-control"
                placeholder="Your Phone"
                aria-label="Phone"
                onChange={handleInput}
                value={userData.phone}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <textarea
            name="message"
              className="form-control"
              aria-label="With textarea"
              placeholder="Your message"
              onChange={handleInput}
              value={userData.message }

            ></textarea>
          </div>

          <input onClick={sendData} className="my-3 btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
