import React from 'react';
import Loader from '../components/common/Loader';
import Menu from '../components/home1/Menu';
import Navbar from '../components/home1/Navbar';
import Header from '../components/home1/Header';
import Experience from '../components/home1/Experience';
import Services from '../components/home1/Services';
// import Process from '../components/home1/Process';
// import Awards from '../components/home1/Awards';
// import Projects from '../components/home1/Projects';
// import Testimonials from '../components/home1/Testimonials';
import Team from '../components/home1/Team';
// import Blog from '../components/home1/Blog';
import Chat from '../components/home1/Chat';
import { Helmet } from 'react-helmet';
import Process from '../components/home2/Process';
import Projects from '../components/innerpage/about/Projects';
import Award from '../components/home2/Award';
import Testimonials from '../components/home1/Testimonials';
import OutlinedCarousel from '../components/home1/OutlinedCarousel';
import Blog from '../components/home2/Blog';
import Contact from '../components/home2/Contact';
import Footer from '../components/home2/Footer';

function Home1() {
  return (
    <>
      <Helmet>
        <title>Extraw Designs - Elite Interior Design Company in Chennai</title>
        <meta name="description" content="Extraw Designs is a premier interior design company in Chennai offering extraordinary home interiors, corporate interiors, commercial restaurant interiors, and architecture & interior design services for over 9 years." />
        <meta name="keywords" content="interior design Chennai, home interiors, corporate interiors, restaurant interiors, architecture design, modular kitchen, bedroom design, living room design" />
        <link rel="canonical" href="https://extrawdesigns.com/" />
        <meta property="og:title" content="Extraw Designs - Elite Interior Design Company in Chennai" />
        <meta property="og:description" content="Transform your spaces with Extraw Designs. Premier interior design company in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home2/assets/css/home_2_style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/innerpages/assets/js/innerpages.js"></script>
        <script src="/home1/assets/js/home_1_scripts.js"></script>

        <script src="/common/assets/js/common_js.js"></script>
      </Helmet>
      <body className="home-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Experience />
            <Services />
            <Process />
            <Projects />
            <Award />
            <Testimonials />
            {/* <OutlinedCarousel/> */}
            {/* <Blog /> */}
            {/* <Contact /> */}
            {/* <Process />
            <Projects />
            <Testimonials />
            <Awards />
            <Team />
            <Blog />
            <Chat /> */}
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Home1;
