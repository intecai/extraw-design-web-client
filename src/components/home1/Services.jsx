import React from 'react';

function Services() {
  return (
    <section className="tc-services-style1" >
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-80 text-center">
            <p className="color-666 text-uppercase wow"> Our services </p>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-3">
                <a
                  href="/services/home-interiors"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-home"></i>
                  </div>
                  <h5 className="fsz-20 mb-20"> Home &nbsp; Interiors </h5>
                  <div className="img">
                    <img
                      src="/assets/services/liv.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Complete home interior solutions, modular kitchens, wardrobes, and living spaces
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="/services/corporate-interiors"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-building"></i>
                  </div>
                  <h5 className="fsz-20 mb-20">Corporate Interiors</h5>
                  <div className="img">
                    <img
                      src="/assets/services/cor.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Office spaces, workstations, conference rooms, and corporate branding interiors
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="/services/commercial-restaurant-interiors"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-utensils"></i>
                  </div>
                  <h5 className="fsz-20 mb-20"> Commercial Restaurant Interiors </h5>
                  <div className="img">
                    <img
                      src="/assets/services/res.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Restaurant, cafe, bar, and commercial hospitality space designs
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="/services/architecture-interior-design"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-drafting-compass"></i>
                  </div>
                  <h5 className="fsz-20 mb-20">
                    Architecture
                  </h5>
                  <div className="img">
                    <img
                      src="/assets/services/arc.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Building design, architectural planning, 3D visualization, and construction supervision
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
            >
              <span>
                Get A Free Quote Now
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
 
    </section>
  );
}

export default Services;
