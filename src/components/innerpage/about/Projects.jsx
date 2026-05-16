import React from 'react';

function Projects ()
{
  return (
    <section className="tc-projects-style2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="fsz-45 fw-500">
              Latest{ ' ' }
              <span className="sub-font fst-italic color-orange1 fw-400">
                projects
              </span>
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <a
              href="/projects"
              className="butn borderd border rounded-pill hover-bg-black"
            >
              <span>
                See All Projects
                <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="tabs-links mt-40">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-proj1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj1"
                type="button"
              >
                Home Interior
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj2"
                type="button"
              >
                Corporate Interior
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj1"
                type="button"
              >
                Commercial Restaurant
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj2"
                type="button"
              >
                Architecture
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-proj1"
          role="tabpanel"
          aria-labelledby="pills-proj1-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#manoj-bhavan" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj2.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2023 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#manoj-bhavan"> Manoj Bhavan </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#padmam" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj3.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#padmam"> Padmam </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#rwd-club-house" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj4.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#rwd-club-house"> RWD Club House </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#jangoz" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj1.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#jangoz"> Jangoz </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-proj2"
          role="tabpanel"
          aria-labelledby="pills-proj2-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#padmam" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj7.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#padmam"> Padmam </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#rwd-club-house" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj8.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#rwd-club-house"> RWD Club House </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#jangoz" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj5.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2023 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Interior Design </a>
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#jangoz"> Jangoz </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="/projects#manoj-bhavan" className="img">
                      <img
                        src="/innerpages/assets/img/projects/proj6.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> 2022 </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Furniture </a>
                      </div>
                      <h3 className="title">
                        <a href="/projects#manoj-bhavan"> Manoj Bhavan </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
