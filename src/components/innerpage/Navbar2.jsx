import React from 'react';
import { routes } from '../../lib/routes';
import { CiTextAlignLeft } from 'react-icons/ci';

function Navbar2 ()
{
  return (
    <nav
      className="navbar navbar-expand-lg inner-navbar-style1 navbar-blue"
      style={ { padding: '20px 4vw' } }
    >
      <div className="container-fluid content">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/images/logo_blue.png"
            alt=""
            className="logo-img"
            style={ {
              width: '60px',
              height: '80px',
              maxWidth: '100%',
              height: 'auto',
            } }
          />
          <style>
            { `
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
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <CiTextAlignLeft className="fsz-50" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            { routes.map( ( route ) => (
              <li className="nav-item" key={ route.path }>
                <a className="nav-link" href={ route.path }>
                  { route.label }
                </a>
              </li>
            ) ) }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
