import React from 'react';

function Testimonials() {
  return (
    <section className="tc-testimonials-style2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="img-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi1.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi2.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi3.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="arrows">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-side">
              <div className="text-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="text sub-font">
                      &ldquo;Had a fantastic experience with Extraw. From start to finish, their team was professional, creative, and attentive to our needs. They transformed our space into a beautiful, functional environment that exceeded our expectations. Highly recommended!&ldquo;
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <h6 className="fsz-18"> Cindy Gomes </h6>
                          <p className="color-ccc mt-2"> Our Sweet Home </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="text sub-font">
                      &ldquo;EXTRAW is outstanding! They brought life and warmth into an otherwise boring office. The designers made excellent recommendations and were very knowledgeable. The project was finished on schedule and on budget. Strongly advised!&ldquo;
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <h6 className="fsz-18"> George Thomas </h6>
                          <p className="color-ccc mt-2"> Our Office </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="text sub-font">
                      &ldquo;Top class assistance and service rendered. Skilled personnel who are innovative in their ideas and give expert recommendations for your interior designs. Fairly priced and worth every penny. Highly recommended!&ldquo;
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <h6 className="fsz-18"> Stephan Jayapaul </h6>
                          <p className="color-ccc mt-2"> Rendering </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="logos">
          <a href="#">
            <img src="/home2/assets/img/clients/cl1.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl2.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl3.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl4.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl5.svg" alt="" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonials;
