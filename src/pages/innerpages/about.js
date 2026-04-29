import React from 'react';
import Header from '../../components/innerpage/about/Header';
import Navbar from '../../components/innerpage/Navbar';
import About from '../../components/innerpage/about/About';
import Process from '../../components/innerpage/about/Process';
import Projects from '../../components/innerpage/about/Projects';
import Awards from '../../components/innerpage/about/Awards';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import { Helmet } from 'react-helmet';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Extraw Designs - Elite Interior Design Company</title>
        <meta name="description" content="Learn about Extraw Designs, Chennai's premier interior design company with over 9 years of experience creating extraordinary spaces in homes, offices, and commercial establishments." />
        <meta name="keywords" content="interior design company Chennai, about Extraw Designs, interior designers Chennai, best interior designers" />
        <link rel="canonical" href="https://extrawdesigns.com/about" />
        <meta property="og:title" content="About Us | Extraw Designs - Elite Interior Design Company" />
        <meta property="og:description" content="Learn about Extraw Designs, Chennai's premier interior design company with over 9 years of experience." />
        <meta property="og:url" content="https://extrawdesigns.com/about" />
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
      </Helmet>
      <body className="inner-pages-style1 about-pg-style1">
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <About />
            <Process />
            <Projects />
            <Awards />
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AboutPage;
