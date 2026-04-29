import React from 'react';

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                {/* <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Boston, MA </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#"> 49 Brimmer St, Boston, MA 02108 </a>
                      </li>
                      <li>
                        <a href="#"> anand.extraw@gmail.com </a>
                      </li>
                      <li>
                        <a href="#"> (054) 3256 78 87 </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Chennai, India </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">1665/1, 21st Main Rd, Aishwarya Colony, Anna Nagar, Chennai - 40</a>
                      </li>
                      <li>
                        <a href="mailto:anand.extraw@gmail.com">anand.extraw@gmail.com</a>
                      </li>
                      <li>
                        <a href="tel:+919025660661">+91 90256 60661</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
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
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
