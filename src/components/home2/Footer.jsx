import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { routes } from '../../lib/routes';

function Footer() {
  return (
    <footer className="tc-footer-style2">
      <div className="container">
        <div className="foot-main-content">
          <div className="row">
            <div className="col-lg-4">
              <div className="foot-info">
                <h3 className="fsz-35 fw-500">
                  Space. Aesthetic. Life. Moments.
                  <span className="sub-font color-orange1 fst-italic">
                    Yourself
                  </span>
                </h3>
                {/* <a
                  href="#"
                  className="butn borderd border rounded-pill hover-bg-black mt-80"
                >
                  <span>
                    <i className="me-2 fal fa-globe"></i> English
                  </span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="links-group">
                <h5 className="sub-title fsz-24 fw-500 mb-30 mt-5 mt-lg-0">
                  Chennai, TN
                </h5>
                <ul>
                  <li>
                    <a href="#"> 1665/1, 21st Main Rd, Aishwarya Colony, Anna Nagar, Chennai - 40 </a>
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
            <div className="col-lg-2">
              <div className="links-group">
                <h5 className="sub-title fsz-24 fw-500 mb-30 mt-5 mt-lg-0">
                  Quick Links
                </h5>
                <ul>
                  {routes.map((route, i) => (
                    <li key={i}>
                      <a href={route.path}> {route.label} </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <a href="/" className="">
              <img src="/assets/images/logo_blue.png" width={50} height={70} alt="" />
              </a>
            </div>
            <div className="col-lg-3">
              <p className="copy">
                © 2026 Extraw Studio. <br /> All Right Reserved
              </p>
            </div>
            <div className="col-lg-5">
              <div className="social-links">
                <a href="https://x.com/ExtrawDesigns9" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/extrawdesigns9/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />  
                </a>
                <a href="https://www.linkedin.com/company/extraw-designs/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="col-lg-2">
              <a
                href="#"
                className="butn borderd border rounded-pill hover-bg-black"
                id="to_top"
              >
                <span>
                  Back to Top <i className="ms-2 fal fa-chevron-up"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/home2/assets/img/foot_shap.svg" alt="" className="shap" />
    </footer>
  );
}

export default Footer;
