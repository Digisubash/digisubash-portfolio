import React from "react";

function Hero() {
  return (
    <section id="slider" className="hero p-0 odd">
      <div
        className="
          
          full-slider
          animation
          slider-h-100 slider-h-auto
          
        "
      >
        <div>
          <div className="slide-center">
            <img
              src="/images/bg-3.jpg"
              alt="Full Image"
              className="full-image"
              data-mask="40"
            />

            <div className="slide-content row" style={{ width: "100vw" }}>
              <div className="col-12 d-flex justify-content-end inner">
                <div className="text-right ">
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="title effect-static-text aos-init aos-animate"
                  >
                    Seo Analyst
                  </h1>
                  <p className="description aos-init aos-animate">
                    Our focus is to map the technologies to solve the business
                    transformation, offering services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
