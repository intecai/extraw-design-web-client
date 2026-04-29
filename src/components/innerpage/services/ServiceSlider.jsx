import React from 'react';

function ServiceSlider({ heroImage, title, breadcrumb, date }) {
  return (
    <section className="tc-main-img-style1 header">
      <div className="main-img">
        <img
          src={heroImage}
          alt=""
          className="img-cover"
          data-speed="1.25"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="info">
            <div className="date fsz-12 text-uppercase mb-30">
              {breadcrumb && breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <a href={item.href}>{item.label}</a>
                  {index < breadcrumb.length - 1 && (
                    <span className="circle icon-3 bg-white rounded-circle mx-3"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <h2 className="title">
              <a href="#" className="hover-orange1">
                {title}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSlider;
