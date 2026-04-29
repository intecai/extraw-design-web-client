import React from 'react';

function Contact() {
  return (
    <section className="tc-contact-style3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="map-side">
              <h5 className="fsz-30 text-uppercase mb-90">
                Contact Us
              </h5>
              <div className="map">
                <img
                  src="/home3_construction/assets/img/map.png"
                  alt=""
                  className="map-img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="contact-info">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-card mb-30">
                    <h4 className="fsz-45 text-uppercase mb-30"> Chennai </h4>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">
                          1665/1, 21st Main Rd, Aishwarya Colony, Anna Nagar, Chennai - 40
                        </a>
                      </li>
                      <li>
                        <a href="#"> anand.extraw@gmail.com </a>
                      </li>
                      <li>
                        <a href="#"> +91 90256 60661 </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <form action="" className="form d-block mt-100">
              <div className="title mb-40 js-splittext-lines">
                <h4 className="fsz-45 text-uppercase mb-30"> Hire us now </h4>
                <p className="text-danger">
                  * Marked fields are required to fill
                </p>
              </div>
              <div
                className="form-body wow fadeInUp slow"
                data-wow-delay="0.3s"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="" className="fsz-12 text-uppercase mb-1">
                        Full name <span className="text-danger"> * </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="" className="fsz-12 text-uppercase mb-1">
                        email address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="" className="fsz-12 text-uppercase mb-1">
                        phone number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="" className="fsz-12 text-uppercase mb-1">
                        subject (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label htmlFor="" className="fsz-12 text-uppercase mb-1">
                        Message
                      </label>
                      <textarea
                        rows="9"
                        className="form-control"
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="upload_img_content">
                    <div className="file">
                      <div className="file__input" id="file__input">
                        <input
                          className="file__input--file"
                          id="customFile"
                          type="file"
                          multiple="multiple"
                          name="files[]"
                        />
                        <label
                          className="file__input--label"
                          htmlFor="customFile"
                          data-text-btn="Add an attachment"
                        >
                          <i className="la la-paperclip"></i> Add an attachment
                        </label>
                      </div>
                      <div
                        className="file__value_content"
                        id="file__value_content"
                      ></div>
                    </div>
                  </div>
                  <div className="form-check mt-40">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fsz-14"
                      htmlFor="flexCheckDefault"
                    >
                      By summiting, i’m agree to the
                      <a href="#" className="text-decoration-underline">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="butn borderd bg-white py-2 px-3 text-uppercase ltspc-1 hover-bg-yellow1 mt-60"
                >
                  <span>
                    Send message
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
