import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import MobileIco from '../Assets/mobile.svg'
import EmailIco from '../Assets/inbox.svg'
import AddressIco from '../Assets/address-card.svg'

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
    <div className="bg-light">

    
    <div className="d-flex  bg-light justify-content-evenly">
    <div className="d-flex border py-2 px-4 bg-white " >
      <img src={MobileIco} className='icons me-2'  alt="" />
      <div className="d-flex flex-column justify-content-center">
        <p>Phone</p>
        <p>+91 9999999999 </p>
      </div>
    </div>
    <div className="d-flex border py-2 px-4 bg-white" >
      <img src={EmailIco} className='icons me-2'  alt="" />
      <div className=" d-flex flex-column justify-content-center">
        <p>Email</p>
        <p>contact.vivekchaprana@gmail.com</p>
      </div>
    </div>
    <div className="d-flex border py-2 px-4 bg-white" >
      <img src={AddressIco}  className='icons me-2' alt="" />
      <div className=" d-flex flex-column justify-content-center">
        <p>Address</p>
        <p>New Delhi, India.</p>
      </div>
    </div>
      
    </div>


      <div className="container border bg-white py-5 mt-5 ">
        <form method="POST">
        <div className="socials mb-3">
          <h2 className="form-title">Socials</h2>
          <div className="socialsDiv py-3 d-flex justify-content-evenly">

          <NavLink  className="insta" style={{textDecoration:'none'}} target="_blank" to={{pathname:"https://www.instagram.com/vivekchaprana/"}}>
          <span><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="yeKesiJabardastiHai" />Instagram</span>
          </NavLink>
          <NavLink  className="github" style={{textDecoration:'none'}} target="_blank" to={{pathname:"https://github.com/vivek-chaprana"}}>
          <span><img src="https://img.icons8.com/ios-filled/48/000000/github.png" alt="yeKesiJabardastiHai" />Github</span>
          </NavLink>
          <NavLink  className="linkedin" style={{textDecoration:'none'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/vivek-chaprana/"}}>
          <span><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="yeKesiJabardastiHai" />LinkedIn</span>
          </NavLink>
          <NavLink className="twitter"  style={{textDecoration:'none'}} target="_blank" to={{pathname:"https://twitter.com/Vickytooop"}}>
          <span><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="yeKesiJabardastiHai" />Twitter</span>
          </NavLink>
          </div>
        </div>
          <h2 className="form-title">Get In Touch</h2>

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
              className="textArea form-control"
              aria-label="With textarea"
              placeholder="Your message"
              onChange={handleInput}
              value={userData.message }

            ></textarea>
          </div>

          <input onClick={sendData} className="my-3 px-3 py-1 btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
