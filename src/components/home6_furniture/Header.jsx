import React from 'react';

function Header() {
  return (
    <header className="tc-header-style6">
 
      <div className="header-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-card">
              <img
                src="/home6_furniture/assets/images/header1.jpg"
                alt=""
                className="bg"
              />
              <div className="content">
                <div className="container">
                  <div className="info px-lg-4">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div className="title">
                          <h2 className="justify-content-end"> Natural. </h2>
                          <h2> peaceful. </h2>
                          <h2 className="justify-content-end me-5">
                            {' '}
                            rustic.{' '}
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        {/* <small className="sm-txt">
                          Discover the our latest collection with rustic style,
                          <br /> premium imports furnitures
                        </small> */}
                      </div>
                    </div>
                    {/* <a href="#" className="float-arrow">
                      <i className="fat fa-arrow-up-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-card">
              <img
                src="/home6_furniture/assets/images/header2.jpg"
                alt=""
                className="bg"
              />
              <div className="content">
                <div className="container">
                  <div className="info px-lg-4">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div className="title">
                          <h2 className="justify-content-end"> modern. </h2>
                          <h2> timeless. </h2>
                          <h2 className="justify-content-end me-5"> urban. </h2>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        {/* <small className="sm-txt">
                          Discover the our latest collection with rustic style,
                          <br /> premium imports furnitures
                        </small> */}
                      </div>
                    </div>
                    {/* <a href="#" className="float-arrow">
                      <i className="fat fa-arrow-up-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-contact">
        <p>
          <a href="#"> +91 90256 60661​ </a>
        </p>
        <p>
          <a href="#"> anand.extraw@gmail.com </a>
        </p>
      </div>
      <div className="arrows">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </header>
  );
}

export default Header;
