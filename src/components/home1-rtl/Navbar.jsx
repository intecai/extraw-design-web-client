import React from 'react';
import { CiTextAlignLeft } from 'react-icons/ci';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/images/logo.png"
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <CiTextAlignLeft className="text-white fsz-50"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ستوديو
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                المشاريع
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                المدونة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                تواصل معنا
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <a href="#" className="icon ms-3">
              <span> EN </span>
            </a>
            <a href="#" className="icon ms-3">
              <span> FR </span>
            </a>
            <a href="#" className="icon ms-5 fsz-21">
              <span>
                <i className="la la-search"></i>
              </span>
            </a>
            <a href="#" className="icon ms-3 side_menu_btn fsz-21">
              <span>
                <i className="la la-grip-lines"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
