import React from 'react';

function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-25 text fw-bold fsz-25-uppercase lh-4">
              WHAT CLIENTS SAY <br /> ABOUT US
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-40 fw-600 lh-2">
                        Extraw turned our ideas into reality—creative, attentive, and professional. Highly recommend!
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text fsz-25-capitalize  fsz-16 fw-bold">
                            Cindy Gomes
                          </h6>
                          <p className="text fsz-25-capitalize fsz-14 color-666">
                            Our Sweet Home
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-40  fw-600 lh-2">
                        Loved the on-time completion and fresh designs—our office feels amazing now. Truly outstanding!
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text fsz-25-capitalize  fsz-16 fw-bold">
                            George Thomas
                          </h6>
                          <p className="text fsz-25-capitalize fsz-14 color-666">
                            Our Office
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-40  fw-600 lh-2">
                        Great ideas, skilled staff, and fair prices! Each detail showed care and quality. Highly recommended.
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text fsz-25-capitalize  fsz-16 fw-bold">
                            Stephan Jayapaul
                          </h6>
                          <p className="text fsz-25-capitalize fsz-14 color-666">
                            Rendering
                          </p>
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
        </div>
      </div>
      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> Creative </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Flexiable </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Dedicated </a>
          </div>
        </div>
      </div>
      <img src="/assets/lines/c_line2.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
