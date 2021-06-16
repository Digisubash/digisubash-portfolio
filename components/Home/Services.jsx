import React from "react";

const Services = () => {
  return (
    <section id="services" className="section-3 odd offers">
      <div className="container">
        <div className="row intro">
          <div className="col-12 col-md-9 align-self-center text-center text-md-left">
            <span className="pre-title m-auto ml-md-0">Our business areas</span>
            <h2>
              Excellence in{" "}
              <span className="featured">
                <span>Services</span>
              </span>
            </h2>
            <p>
              We are leaders in providing consultancy services with a set of
              cutting-edge technologies and a team of experienced and renowned
              professionals. These are some options that you can hire.
            </p>
          </div>
          <div className="col-12 col-md-3 align-self-end">
            <a
              href="#"
              className="btn mx-auto mr-md-0 ml-md-auto outline-button"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div className="row justify-content-center items">
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-organization"></i>
              <h4>Audit &amp; Assurance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-briefcase"></i>
              <h4>Financial Advisory</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-chart"></i>
              <h4>Analytics and M&amp;A</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-plane"></i>
              <h4>Middle Marketing</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-globe-alt"></i>
              <h4>Legal Consulting</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <i className="icon icon-drawer"></i>
              <h4>Regulatory Risk</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#">
                <i className="btn-icon pulse fas fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
