import React from 'react';
import { CiTextAlignLeft } from 'react-icons/ci';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg tc-navbar-style3">
      <div className="container-fluid">
        <div className="col-6 col-lg-4 p-0">
          <a className="navbar-brand" href="/">
            <img
              src="/home3_construction/assets/img/logo.png"
              alt=""
              className="logo-img"
              style={{
                width: '60px',
                height: '80px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <style>
              {`
                @media (max-width: 768px) {
                  .logo-img {
                    width: 40px !important;
                    height: 54px !important;
                  }
                }
                @media (max-width: 480px) {
                  .logo-img {
                    width: 30px !important;
                    height: 40px !important;
                  }
                }
              `}
            </style>
          </a>
        </div>
        <div className="col-6 col-lg-4 p-0 d-lg-none text-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <CiTextAlignLeft className="text-dark fsz-50"/>
          </button>
        </div>
        <div className="col-6 col-lg-4 p-0 d-none d-lg-block">
          <div className="btn-select">
            <select name="" id="" className="form-select">
              <option value="">Private clients</option>
              <option value="">Private clients2</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 p-0 d-none d-lg-block">
          <div className="side-nav">
            <a href="#" className="b-link">
              <span>
                Free Consultation
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
            <a href="#" className="ico-link">
              <i className="la la-search"></i>
            </a>
            <a href="#" className="ico-link">
              <i className="la la-globe"></i>
            </a>
            <a href="#" className="ico-link side_menu_btn">
              <i className="la la-grip-lines"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
