import React from "react";

const Newslatter = () => {
  return (
    <section id="subscribe" className="section-6 odd subscribe">
      <div className="container smaller">
        <div className="row">
          <div className="col-12 col-md-6 m-md-0 intro">
            <span className="pre-title m-0">Newsletter</span>
            <h2>
              <span className="featured">
                <span>Know</span>
              </span>{" "}
              First
            </h2>
            <p>
              Follow closely and receive content about our company and the news
              of the current market.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <form id="nexgen-subscribe" className="row m-auto items">
              <div className="col-12 mt-0 input-group align-self-center item">
                <input
                  type="text"
                  name="name"
                  className="form-control field-name"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 input-group align-self-center item">
                <input
                  type="email"
                  name="email"
                  className="form-control field-email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 input-group align-self-center item">
                <button
                  data-aos="zoom-in"
                  className="btn primary-button aos-init aos-animate"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newslatter;
