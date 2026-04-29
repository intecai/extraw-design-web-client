import React from 'react';
import { routes } from '../../lib/routes';

function Footer() {
  return (
    <footer className="tc-footer-style1">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  We believe that architecture has the power to shape lives and
                  uplift communities. Archin&lsquo;s philosophy is passion for
                  innovation, sustainablity and t imeless aesthetics
                </div>
                <div className="foot-social mt-50">
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
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Chennai, India </h5>
                <ul className="footer-links">
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
            <div className="col-lg-3">
              {/* This column intentionally left blank or can be used for other info */}
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© 2026 Archin Studio. All Right Reserved</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                {routes.map((route) => (
                  <a href={route.path}>{route.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
