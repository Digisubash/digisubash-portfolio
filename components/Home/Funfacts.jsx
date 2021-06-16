import React from "react";

const Funfacts = () => {
  return (
    <section id="funfacts" className="section-2 odd counter funfacts">
      <div className="container">
        <div className="row mb-md-5 text-center">
          <div className="col-12">
            <span className="pre-title">What are we doing</span>
            <h2>
              <span className="featured">
                <span>Results</span>
              </span>{" "}
              in Numbers
            </h2>
          </div>
        </div>
        <div className="row justify-content-center text-center items">
          <div className="col-12 col-md-6 col-lg-3 item">
            <div data-percent="128" className="radial">
              <canvas width="87" height="87"></canvas>
              <span>128</span>
            </div>
            <h4>Certifications</h4>
          </div>
          <div className="col-12 col-md-6 col-lg-3 item">
            <div data-percent="230" className="radial">
              <canvas width="87" height="87"></canvas>
              <span>230</span>
            </div>
            <h4>Employees</h4>
          </div>
          <div className="col-12 col-md-6 col-lg-3 item">
            <div data-percent="517" className="radial">
              <canvas width="87" height="87"></canvas>
              <span>517</span>
            </div>
            <h4>Customers</h4>
          </div>
          <div className="col-12 col-md-6 col-lg-3 item">
            <div data-percent="94" className="radial">
              <canvas width="87" height="87"></canvas>
              <span>94</span>
            </div>
            <h4>Countries Served</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfacts;
