import React from 'react';
import { FaPaintBrush, FaSearch, FaTrophy, FaClock } from 'react-icons/fa';

function ServiceContent ( {
  introTitle,
  introSubtitle,
  introDescription,
  whyChooseUs,
  categories,
  features
} )
{
  return (
    <section className="tc-post-content-style1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="info">
              <div className="breadcromb wow fadeInUp slow" data-wow-delay="0.2s">
                <a href="/"> Home </a>
                <span className="icon">/</span>
                <a href="/services"> Services </a>
                <span className="icon">/</span>
                <a href="#"> { introSubtitle } </a>
              </div>

              <h6 className="fsz-24 fw-600 mb-30 mt-5 wow fadeInUp slow" data-wow-delay="0.2s">
                { introTitle }
              </h6>

              <div className="text fsz-14 color-666 mb-50 wow fadeInUp slow" data-wow-delay="0.2s">
                <span className="lg-letter"> W </span> elcome to Extraw Designs, the trusted name for innovative and functional interior design solutions. { introDescription }
              </div>
            </div>
          </div>
        </div>

        { whyChooseUs && (
          <div className="why-choose-section my-5 py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Why Choose Us?</h3>
                <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">
                  { whyChooseUs.title }
                </h4>
                <div className="row text-center g-4">
                  <div className="col-md-3">
                    <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.15s">
                      <div className="card-icon mb-3">
                        <FaPaintBrush className="icon-service" />
                      </div>
                      <h6 className="fw-bold mb-2">{ whyChooseUs.items[ 0 ]?.title }</h6>
                      <p className="fsz-13 color-666 mb-0">{ whyChooseUs.items[ 0 ]?.description }</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.25s">
                      <div className="card-icon mb-3">
                        <FaSearch className="icon-service" />
                      </div>
                      <h6 className="fw-bold mb-2">{ whyChooseUs.items[ 1 ]?.title }</h6>
                      <p className="fsz-13 color-666 mb-0">{ whyChooseUs.items[ 1 ]?.description }</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.35s">
                      <div className="card-icon mb-3">
                        <FaTrophy className="icon-service" />
                      </div>
                      <h6 className="fw-bold mb-2">{ whyChooseUs.items[ 2 ]?.title }</h6>
                      <p className="fsz-13 color-666 mb-0">{ whyChooseUs.items[ 2 ]?.description }</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.45s">
                      <div className="card-icon mb-3">
                        <FaClock className="icon-service" />
                      </div>
                      <h6 className="fw-bold mb-2">{ whyChooseUs.items[ 3 ]?.title }</h6>
                      <p className="fsz-13 color-666 mb-0">{ whyChooseUs.items[ 3 ]?.description }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) }

        <div className="row justify-content-center">
          <div className="col-lg-10">
            { categories && (
              <div className="categories-section my-5 py-5">
                <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Categories</h3>
                <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">
                  { categories.title }
                </h4>
                <div className="row g-4">
                  { categories.items.map( ( item, index ) => (
                    <div className="col-lg-4 col-md-6" key={ index }>
                      <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay={ 0.1 + ( index * 0.1 ) }>
                        <h6 className="fw-bold mb-2">{ item.title }</h6>
                        <p className="fsz-14 color-666 mb-0">{ item.description }</p>
                      </div>
                    </div>
                  ) ) }
                </div>
              </div>
            ) }

            <div className="features-section my-5 py-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="img th-400 radius-10 overflow-hidden wow zoomIn slow" data-wow-delay="0.2s">
                    <img
                      src={ features?.image || "/innerpages/assets/img/blog/b14.jpg" }
                      alt=""
                      className="img-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="content ps-lg-4">
                    <h5 className="fsz-24 fw-600 mb-3 wow fadeInUp">{ features?.title || "Our Approach" }</h5>
                    <div className="text fsz-14 color-666 wow fadeInUp" data-wow-delay="0.1s">
                      { features?.description || "We combine innovative design concepts with practical functionality to create spaces that inspire and delight. Our team works closely with you at every stage to ensure your vision becomes reality." }
                    </div>
                    <ul className="list-styled color-666 fsz-14 mt-4 wow fadeInUp" data-wow-delay="0.2s">
                      <li className="mb-2">Comprehensive design consultation</li>
                      <li className="mb-2">3D visualization and planning</li>
                      <li className="mb-2">Quality materials sourcing</li>
                      <li className="mb-2">Expert installation and finishing</li>
                      <li>Post-project support and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section text-center py-5 my-5">
              <h4 className="fsz-28 fw-600 mb-4 wow fadeInUp">Ready to Transform Your Space?</h4>
              <p className="fsz-14 color-666 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                Contact us today for a free consultation and let's bring your vision to life.
              </p>
              <a
                href="/contact"
                className="butn btn-circle fsz-13 fw-700 wow fadeInUp"
                data-wow-delay="0.2s"
                style={ {
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  textDecoration: "none"
                } }
              >
                Book an Appointment
              </a>
            </div>

            <div className="share-content wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tags">
                    <a href="#">Interior Design</a>
                    <a href="#">{ introSubtitle }</a>
                    <a href="#">Extraw Designs</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="share mt-4 mt-lg-0 justify-content-lg-end">
                    <span className="txt me-3"> Share on </span>
                    <div className="links">
                      <a href="#">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceContent;
