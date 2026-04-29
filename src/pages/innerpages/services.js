import React from "react";
import Footer from "../../components/home2/Footer";
import Menu from "../../components/innerpage/Menu";
import Navbar2 from "../../components/innerpage/Navbar2";
import StartButton from "../../components/home5_residence/StartButton";
import Header from "../../components/innerpage/services/Header";
import Services from "../../components/home8_portfolio/Services";
import Portfolio from "../../components/home8_portfolio/Portfolio";
import Partners from "../../components/home8_portfolio/Partners";
import { Helmet } from "react-helmet";
import About from "../../components/home8_portfolio/About";
function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Extraw Designs - Interior Design Services</title>
        <meta name="description" content="Explore Extraw Designs' comprehensive interior design services in Chennai including home interiors, corporate interiors, commercial restaurant interiors, and architecture & interior design." />
        <meta name="keywords" content="interior design services Chennai, home interiors, corporate offices, restaurant design, architecture design, modular kitchen" />
        <link rel="canonical" href="https://extrawdesigns.com/services" />
        <meta property="og:title" content="Our Services | Extraw Designs - Interior Design Services" />
        <meta property="og:description" content="Explore Extraw Designs' comprehensive interior design services in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/services" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="/home2/assets/css/home_2_style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home8_portfolio/assets/css/home_8_style.css"
        />
        <script src="/home8_portfolio/assets/js/home_8_scripts.js"></script>
      </Helmet>
      <body className="inner-pages-style1 home-style8">
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar2 />
          <Header />
          <main className="fullpage-slider8">
            <div className="swiper-wrapper">
              <Services />
              <Portfolio />
              <Partners />
            </div>
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ServicesPage;
