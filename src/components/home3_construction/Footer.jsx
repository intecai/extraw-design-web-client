import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { routes } from '../../lib/routes';

function Footer() {
  return (
    <footer className="tc-footer-style3">
      <div className="container">
        <div className="top-info">
          <div className="row gx-0 align-items-end">
            <div className="col-lg-4">
              <a href="/" className="foot-logo mb-5 mb-lg-0">
                <img src="/assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/" className="text-uppercase mb-5 mb-lg-0">
                <span> Interior Design Studio </span>
                <i className="ti-arrow-top-right ms-2"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <div className="top-links text-lg-end mb-5 mb-lg-0">
                {routes.map((route, i) => (
                  <a key={i} href={route.path}> {route.label} </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-lg-2 mb-5 mb-lg-0">
              <h5 className="fsz-24 text-uppercase fw-500 lh-5">
                Space. Aesthetic. <br /> Life. Moments.
              </h5>
            </div>
            <div className="col-lg-3 offset-lg-2 mb-5 mb-lg-0">
              <div className="adresses">
                <div className="adress-card mb-70">
                  <h5 className="fsz-24 text-uppercase fw-500 lh-5 mb-4">
                    Chennai, TN
                  </h5>
                  <ul className="color-999 lh-5">
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
            </div>
            <div className="col-lg-2 offset-lg-1 mb-5 mb-lg-0">
              <div className="links">
                <h5 className="fsz-24 text-uppercase fw-500 lh-5 mb-4">
                  Services
                </h5>
                <ul className="color-999 lh-7">
                  <li>
                    <a href="#"> Home Interiors </a>
                  </li>
                  <li>
                    <a href="#"> Corporate Interiors </a>
                  </li>
                  <li>
                    <a href="#"> Commercial Restaurant </a>
                  </li>
                  <li>
                    <a href="#"> Architecture </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="social">
                <h5 className="fsz-24 text-uppercase fw-500 lh-5 mb-4">
                  Social
                </h5>
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
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="btn-select">
                <select name="" id="" className="form-select">
                  <option value="">English</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <p className="color-999">
                © 2026 Extraw Studio. All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
