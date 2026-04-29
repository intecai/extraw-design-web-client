import React from 'react';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ContactInfo from '../../components/innerpage/contact/ContactInfo';
import Map from '../../components/innerpage/contact/Map';
import ContactForm from '../../components/innerpage/contact/ContactForm';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/home1/Navbar';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Extraw Designs - Get in Touch</title>
        <meta name="description" content="Contact Extraw Designs, Chennai's premier interior design company. Get in touch for consultations on home interiors, corporate interiors, restaurant interiors, and architecture design projects." />
        <meta name="keywords" content="contact interior designer Chennai, interior design consultation, get quote interior design" />
        <link rel="canonical" href="https://extrawdesigns.com/contact" />
        <meta property="og:title" content="Contact Us | Extraw Designs - Get in Touch" />
        <meta property="og:description" content="Contact Extraw Designs for your interior design needs in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/contact" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
         <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home2/assets/css/home_2_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 contact-pg-style1 home-style1">
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar2 />
          {/* <Navbar /> */}
          {/* <Header /> */}
          {/* <div className="contact-navbar-spacer"></div> */}
          <ContactForm />

          <main>
            {/* <ContactInfo /> */}
       
            <Map />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ContactPage;
