import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section-7 form contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 pr-md-5 align-self-center text">
            <div className="row intro">
              <div className="col-12 p-0">
                <span className="pre-title m-0">Send a message</span>
                <h2>
                  Get in{" "}
                  <span className="featured">
                    <span>Touch</span>
                  </span>
                </h2>
                <p>We will respond to your message as soon as possible.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-0">
                <form id="nexgen-simple-form" className="nexgen-simple-form">
                  <div className="row form-group-margin">
                    <div className="col-12 col-md-6 m-0 p-2 input-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control field-name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12 col-md-6 m-0 p-2 input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control field-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12 col-md-6 m-0 p-2 input-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control field-phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-12 col-md-6 m-0 p-2 input-group">
                      <i className="icon-arrow-down mr-3"></i>
                      <select name="info" className="form-control field-info">
                        <option value="" selected="" disabled="">
                          More Info
                        </option>
                        <option>Audit &amp; Assurance</option>
                        <option>Financial Advisory</option>
                        <option>Analytics and M&amp;A</option>
                        <option>Middle Marketing</option>
                        <option>Legal Consulting</option>
                        <option>Regulatory Risk</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-12 m-0 p-2 input-group">
                      <textarea
                        name="message"
                        className="form-control field-message"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="col-12 input-group m-0 p-2">
                      <button className="btn primary-button">SEND</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="contacts">
              {/* <h4>Example Inc.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Praesent diam lacus, dapibus sed imperdiet consectetur.</p> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-phone-alt mr-2"></i>
                    +91 78452 92989
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-envelope mr-2"></i>
                    hello@digisubash.com
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Chennai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
