import React from "react";

const Contact = () => {
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
      <form action="">
      <h2>Get In Touch</h2>

        <div class="row my-3">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              aria-label="Name"
              required="true"

            />
          </div>
          <div class="col">
            <input
              type="email"
              class="form-control"
              placeholder="Your Email"
              aria-label="Email"
              required="true"

            />
          </div>
        </div>
        <div class="input-group">
  <textarea class="form-control" aria-label="With textarea" placeholder="message"></textarea>
</div>  


        <input className="my-3 btn btn-primary" type="submit" value="Send" />
      </form>
      </div>
    </>
  );
};

export default Contact;
