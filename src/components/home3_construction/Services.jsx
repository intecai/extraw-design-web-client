import React from 'react';

function Services() {
  return (
    <section className="tc-services-style3">
      <div className="container">
        <div className="top-inf mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h5
                className="fsz-30 text-uppercase wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Our Services
              </h5>
            </div>
            <div className="col-lg-4">
              <div
                className="text fsz-18 mt-4 mt-lg-0 pe-lg-5 wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                Extraw Studio offers comprehensive interior designing solutions. 
                We create spaces that reflect your personality and meet your functional needs.
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text fsz-18 mt-4 mt-lg-0 wow fadeInUp slow"
                data-wow-delay="0.6s"
              >
                From concept to execution, we ensure quality design and projects 
                are always delivered to an exceptional standard.
              </div>
            </div>
          </div>
        </div>
        <div className="servives-cards">
          <div className="row gx-0">
            <div className="col-lg-3">
              <a
                href="/services/home-interiors"
                className="service-card wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <div className="num">
                  <span className="num-cir"> 1 </span>
                </div>
                <div className="img">
                  <img
                    src="/assets/services/liv.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666">  </p>
                  <h3 className="fsz-37 text-uppercase fw-500 mt-15">
                    Home <br/>   Interiors
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a
                href="/services/corporate-interiors"
                className="service-card wow zoomIn"
                data-wow-delay="0.2s"
              >
                <div className="num">
                  <span className="num-cir"> 2 </span>
                </div>
                <div className="img">
                  <img
                    src="/assets/services/cor.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666">  </p>
                  <h3 className="fsz-37 text-uppercase fw-500 mt-15">
                    Corporate Interiors
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a
                href="/services/commercial-restaurant-interiors"
                className="service-card wow fadeInRight"
                data-wow-delay="0.8s"
              >
                <div className="num">
                  <span className="num-cir"> 3 </span>
                </div>
                <div className="img">
                  <img
                    src="/assets/services/res.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666">  </p>
                  <h3 className="fsz-37 text-uppercase fw-500 mt-15">Commercial Restaurant</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a
                  href="/services/architecture-interior-design"
                className="service-card wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <div className="num">
                  <span className="num-cir"> 4 </span>
                </div>
                <div className="img">
                  <img
                    src="/assets/services/arc.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666">  </p>
                  <h3 className="fsz-37 text-uppercase fw-500 mt-15"> Architecture  &nbsp; &nbsp;</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
