import React from "react";

const Videos = () => {
  return (
    <section id="video" className="section-1 highlights image-center">
      <div className="container smaller">
        <div className="row text-center intro">
          <div className="col-12">
            <span className="pre-title">Introduction Video</span>
            <h2>
              Advisory{" "}
              <span className="featured">
                <span>Performance</span>
              </span>
            </h2>
            <p className="text-max-800">
              Financial executives need to review their strategies, operating
              models and capabilities so that their areas can generate sound
              information for better decision making.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 gallery">
            <a
              href="#"
              className="
                square-image
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i className="icon bigger fas fa-play clone"></i>
              <i className="icon bigger fas fa-play"></i>
              <img
                src="/images/video-1.jpg"
                className="fit-image"
                alt="Introduction Video"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
