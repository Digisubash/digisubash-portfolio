import { useContext } from "react";
import Slider from "react-slick";

import AppContext from "../../context/AppContext";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = ({ posts }) => {
  const { deviceWidth } = useContext(AppContext);

  console.log(posts);

  const isMobile = deviceWidth < 500;
  const isTab = deviceWidth < 800;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTab ? 2 : 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <section id="blog" className="section-5  showcase">
      <div className="overflow-holder">
        <div className="container">
          <div className="row intro">
            <div className="col-12 col-md-9 align-self-center text-center text-md-left">
              <span className="pre-title m-auto m-md-0">
                Our editorial content
              </span>
              <h2>
                Latest{" "}
                <span className="featured">
                  <span>Blogs</span>
                </span>
              </h2>
              <p>
                Every week we publish content about what is best in the business
                world.
              </p>
            </div>
            <div className="col-12 col-md-3 align-self-end">
              <a
                href="#"
                className="btn mx-auto mr-md-0 ml-md-auto primary-button"
              >
                SEE ALL
              </a>
            </div>
          </div>
          <div>
            <Slider {...sliderSettings} className="blog-swaiper">
              {/* {posts.map((post, index) => (
                <div className="swiper-slide slide-center item" key={index}>
                  <div className="row card p-0 text-center">
                    <div className="image-over">
                      <img src={post.attributes.thumbnail} alt="Lorem ipsum" />
                    </div>
                    <div
                      className="
                      card-footer
                      d-lg-flex
                      align-items-center
                      justify-content-center
                    "
                    >
                      <a href="#" className="d-lg-flex align-items-center">
                        <i className="icon-user"></i>Digi Subash
                      </a>
                      <a href="#" className="d-lg-flex align-items-center">
                        <i className="icon-clock"></i>16 Days Ago
                      </a>
                    </div>
                    <div className="card-caption col-12 p-0">
                      <div className="card-body">
                        <a href="#">
                          <h4>{post.attributes.title}</h4>
                          <p>{post.attributes.description}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

              <div className="swiper-slide slide-center item">
                <div className="row card p-0 text-center">
                  <div className="image-over">
                    <img src="/images/news-3.jpg" alt="Lorem ipsum" />
                  </div>
                  <div
                    className="
                      card-footer
                      d-lg-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-user"></i>Andrea Miller
                    </a>
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-clock"></i>16 Days Ago
                    </a>
                  </div>
                  <div className="card-caption col-12 p-0">
                    <div className="card-body">
                      <a href="#">
                        <h4>Working from home is now a trend</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slide-center item">
                <div className="row card p-0 text-center">
                  <div className="image-over">
                    <img src="/images/news-4.jpg" alt="Lorem ipsum" />
                  </div>
                  <div
                    className="
                      card-footer
                      d-lg-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-user"></i>John Smith
                    </a>
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-clock"></i>23 Days Ago
                    </a>
                  </div>
                  <div className="card-caption col-12 p-0">
                    <div className="card-body">
                      <a href="#">
                        <h4>Tips for having a good relationship at work</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slide-center item">
                <div className="row card p-0 text-center">
                  <div className="image-over">
                    <img src="/images/news-5.jpg" alt="Lorem ipsum" />
                  </div>
                  <div
                    className="
                      card-footer
                      d-lg-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-user"></i>David Cooper
                    </a>
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-clock"></i>30 Days Ago
                    </a>
                  </div>
                  <div className="card-caption col-12 p-0">
                    <div className="card-body">
                      <a href="#">
                        <h4>
                          David Cooper tells about the opening of the new office
                          in Baltimore
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slide-center item">
                <div className="row card p-0 text-center">
                  <div className="image-over">
                    <img src="/images/news-1.jpg" alt="Lorem ipsum" />
                  </div>
                  <div
                    className="
                      card-footer
                      d-lg-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-user"></i>Andrea Miller
                    </a>
                    <a href="#" className="d-lg-flex align-items-center">
                      <i className="icon-clock"></i>2 Days Ago
                    </a>
                  </div>
                  <div className="card-caption col-12 p-0">
                    <div className="card-body">
                      <a href="#">
                        <h4>Increasing creativity is possible for everyone</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
