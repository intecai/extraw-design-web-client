import React from 'react';
import { 
  FaPaintBrush, 
  FaGem, 
  FaClock, 
  FaDollarSign,
  FaLightbulb,
  FaSearch,
  FaHandshake,
  FaTrophy,
  FaWallet,
  FaCheckCircle,
  FaPencilRuler,
  FaHardHat,
  FaHammer
} from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';

function About() {
  return (
    <section className="tc-about-style6">
      {/* <div className="features-items">
        <div className="row">
          <div className="col-lg-3">
            <div className="feat-item wow fadeInUp slow" data-wow-delay="0.2s">
              <p> free shipping all orders over $ </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="feat-item wow fadeInUp slow" data-wow-delay="0.4s">
              <p> buy now, pay later with klarna </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="feat-item wow fadeInUp slow" data-wow-delay="0.6s">
              <p> 30 days return guarantee </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="feat-item wow fadeInUp slow" data-wow-delay="0.8s">
              <p> 100% secure online payment </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="info">
          <h2>
            WE CRAFT PERFECT LINES <br />
            AND CREATE A PRESENCE <br />
            THAT DEFINES EVERY SPACE
          </h2>
          <p>
            Choose furniture that stays with you for life. At Archin, we take pride in using premium-quality local materials to design timeless wooden pieces that become part of your journey and every milestone you celebrate.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* <div className="promise-section py-5">
          <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Our Promise</h3>
          <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">We uphold four core principles</h4>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="core-principle-card h-100 wow fadeInUp" data-wow-delay="0.15s">
                <span className="card-number">01</span>
                <div className="card-icon">
                  <FaPaintBrush className="icon-furniture" />
                </div>
                <h5 className="fw-bold mb-3">Tailored Design</h5>
                <p>Customized solutions to match your unique needs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="core-principle-card h-100 wow fadeInUp" data-wow-delay="0.25s">
                <span className="card-number">02</span>
                <div className="card-icon">
                  <FaGem className="icon-furniture" />
                </div>
                <h5 className="fw-bold mb-3">Uncompromised Quality</h5>
                <p>Premium materials and flawless craftsmanship.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="core-principle-card h-100 wow fadeInUp" data-wow-delay="0.35s">
                <span className="card-number">03</span>
                <div className="card-icon">
                  <FaClock className="icon-furniture" />
                </div>
                <h5 className="fw-bold mb-3">Timely Delivery</h5>
                <p>Strict adherence to project timelines.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="core-principle-card h-100 wow fadeInUp" data-wow-delay="0.45s">
                <span className="card-number">04</span>
                <div className="card-icon">
                  <FaDollarSign className="icon-furniture" />
                </div>
                <h5 className="fw-bold mb-3">Value for Money</h5>
                <p>Delivering the best within your budget.</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="why-choose-us-section py-5">
          <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Why Choose Us?</h3>
          <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">
            We take immense pride in our ability to blend elegance with practicality
          </h4>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.15s">
                <div className="card-icon mb-3">
                  <FaLightbulb className="icon-service" />
                </div>
                <h6 className="fw-bold mb-2">Innovative Designs</h6>
                <p className="fsz-13 color-666 mb-0">Cutting-edge concepts that set your space apart.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.25s">
                <div className="card-icon mb-3">
                  <FaSearch className="icon-service" />
                </div>
                <h6 className="fw-bold mb-2">Attention to Detail</h6>
                <p className="fsz-13 color-666 mb-0">Every element meticulously planned and executed.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.35s">
                <div className="card-icon mb-3">
                  <FaHandshake className="icon-service" />
                </div>
                <h6 className="fw-bold mb-2">Client-Centric Approach</h6>
                <p className="fsz-13 color-666 mb-0">Your vision and satisfaction at the heart of every decision.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="choose-card p-4 h-100 wow fadeInUp" data-wow-delay="0.45s">
                <div className="card-icon mb-3">
                  <FaTrophy className="icon-service" />
                </div>
                <h6 className="fw-bold mb-2">Award Winning Expertise</h6>
                <p className="fsz-13 color-666 mb-0">Recognized excellence in design and craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="categories-section py-5">
          <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Our Services</h3>
          <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">
            Explore our comprehensive interior design offerings
          </h4>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="fw-bold mb-2">Living Room Design</h6>
                <p className="fsz-14 color-666 mb-0">Welcoming and stylish living spaces combining functionality and elegance.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.15s">
                <h6 className="fw-bold mb-2">Bedroom Design</h6>
                <p className="fsz-14 color-666 mb-0">Serene, cozy bedrooms designed for comfort with soothing colours.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.2s">
                <h6 className="fw-bold mb-2">Kitchen Design</h6>
                <p className="fsz-14 color-666 mb-0">Efficient, stylish kitchens with modern layouts and sleek cabinets.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.25s">
                <h6 className="fw-bold mb-2">Dining Room Design</h6>
                <p className="fsz-14 color-666 mb-0">Elegant dining spaces crafted for memorable meals.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="fw-bold mb-2">Pooja Room Design</h6>
                <p className="fsz-14 color-666 mb-0">Tranquil spiritual spaces blending tradition with modern aesthetics.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="category-card p-4 h-100 wow fadeInUp" data-wow-delay="0.35s">
                <h6 className="fw-bold mb-2">Balcony Design</h6>
                <p className="fsz-14 color-666 mb-0">Serene balconies with greenery and ambient lighting.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="execution-phases-section py-5">
          <h3 className="text-uppercase text-center mb-3 wow fadeInUp">Execution Phases</h3>
          <h4 className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s">
            Our simple process involves five steps
          </h4>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center position-relative execution-phases-flow">
            {/* Step 01 */}
            <div className="text-center flex-fill py-3 px-2 position-relative">
              <div className="execution-phase-card wow fadeInUp d-inline-block" data-wow-delay="0.15s">
                <span className="step-number mb-2">Step 01</span>
                <div className="phase-icon mb-2">
                  <FaPencilRuler className="phase-icon-inner" />
                </div>
                <h5 className="fw-bold mb-0">Design Conception</h5>
              </div>
            </div>
            {/* Connector line - only show on desktop */}
            <div className="d-none d-md-block flex-grow-0 flex-shrink-0" style={{width: "60px", height: "2px", background: "#e0e0e0", margin: "0 8px", alignSelf: "center"}} />
            {/* Connector line - mobile vertical (simulate a line below the step) */}
            <div className="d-block d-md-none w-100" style={{height: "30px", width: "2px", background: "#e0e0e0", margin: "0 auto"}} />
            
            {/* Step 02 */}
            <div className="text-center flex-fill py-3 px-2 position-relative">
              <div className="execution-phase-card wow fadeInUp d-inline-block" data-wow-delay="0.3s">
                <span className="step-number mb-2">Step 02</span>
                <div className="phase-icon mb-2">
                  <MdArchitecture className="phase-icon-inner" />
                </div>
                <h5 className="fw-bold mb-0">Pre Construction</h5>
              </div>
            </div>
            {/* Connector line - only show on desktop */}
            <div className="d-none d-md-block flex-grow-0 flex-shrink-0" style={{width: "60px", height: "2px", background: "#e0e0e0", margin: "0 8px", alignSelf: "center"}} />
            {/* Connector line - mobile vertical */}
            <div className="d-block d-md-none w-100" style={{height: "30px", width: "2px", background: "#e0e0e0", margin: "0 auto"}} />

            {/* Step 03 */}
            <div className="text-center flex-fill py-3 px-2 position-relative">
              <div className="execution-phase-card wow fadeInUp d-inline-block" data-wow-delay="0.45s">
                <span className="step-number mb-2">Step 03</span>
                <div className="phase-icon mb-2">
                  <FaHammer className="phase-icon-inner" />
                </div>
                <h5 className="fw-bold mb-0">Construction Stage</h5>
              </div>
            </div>
          </div>
          <style>
            {`
              @media (max-width: 767.98px) {
                .execution-phases-flow > div.execution-phase-card {
                  margin-bottom: 0.75rem;
                }
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}

export default About;
