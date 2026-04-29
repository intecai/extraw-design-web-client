import React from 'react';
import Loader from '../components/common/Loader';
import Menu from '../components/home3_construction/Menu';
import StartButton from '../components/home3_construction/StartButton';
import Navbar from '../components/home1/Navbar';
import Header from '../components/home3_construction/Header';
import Services from '../components/home3_construction/Services';
import About from '../components/home3_construction/About';
import Portfolio from '../components/home3_construction/Portfolio';
import Partners from '../components/home3_construction/Partners';
import Blog from '../components/home3_construction/Blog';
import Contact from '../components/home3_construction/Contact';
import Footer from '../components/home2/Footer';
import { Helmet } from 'react-helmet';

function Home3() {
  return (
    <>
      <Helmet>
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
        <script src="/home1/assets/js/home_1_scripts.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="/home3_construction/assets/css/home_3_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/home3_construction/assets/js/home_3_scripts.js"></script>
      </Helmet>
      <body className="home-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Services />
            {/* <About /> */}
            <Portfolio />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default Home3;
