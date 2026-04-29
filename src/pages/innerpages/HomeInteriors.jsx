import React from 'react';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import ServiceSlider from '../../components/innerpage/services/ServiceSlider';
import ServiceContent from '../../components/innerpage/services/ServiceContent';
import { Helmet } from 'react-helmet';

const serviceData = {
  heroImage: "/assets/services/home-interiors/home-interior.jpg",
  breadcrumb: [
    { label: "Services", href: "/services" },
    { label: "Home Interiors", href: "/services/home-interiors" }
  ],
  title: "Transform Your Home Spaces With Best Elite Interior Designs",
  introTitle: "Transform Your Home Spaces With Best Elite Interior Designs",
  introSubtitle: "Home Interiors",
  introDescription: "We transform houses into homes that radiate style, comfort, and personality. With years of experience and a dedicated team of designers, we specialize in creating bespoke interiors tailored to your lifestyle and preferences. Our approach is rooted in innovation, functionality, and aesthetics, ensuring every project is a seamless blend of elegance and practicality. From contemporary living rooms to serene pooja rooms, we take pride in designing every space in your home with Extraw care and love.",
  whyChooseUs: {
    title: "Extraw Designs For Your Home Interiors",
    items: [
      { title: "Customized Solutions", description: "Designs tailored to your taste and lifestyle." },
      { title: "Attention to Detail", description: "Every element, from furniture placement to colour palettes, is meticulously curated." },
      { title: "Unmatched Expertise", description: "Over 9 years of experience in residential interior design." },
      { title: "On-Time Delivery", description: "We value your time and ensure timely project completion." }
    ]
  },
  categories: {
    title: "Home Interiors We Specialize In",
    items: [
      { title: "Living Room Design", description: "Welcoming and stylish living spaces combining functionality and elegance, tailored to your personality." },
      { title: "Bed Room Design", description: "Serene, cozy bedrooms designed for comfort, with soothing colours and smart storage solutions." },
      { title: "Kitchen Design", description: "Efficient, stylish kitchens with modern layouts, sleek cabinets, and innovative storage solutions." },
      { title: "Dining Room Design", description: "Elegant dining spaces crafted to enhance the joy of memorable meals with loved ones." },
      { title: "Pooja Room Design", description: "Tranquil, spiritual pooja rooms blending traditional elements with modern aesthetics for daily prayers." },
      { title: "Balcony Design", description: "Serene balconies with greenery, comfortable seating, and ambient lighting for relaxation and socializing." }
    ]
  },
  features: {
    image: "/assets/services/home-interiors/home-interior-2.jpg",
    title: "Our Approach to Home Interiors",
    description: "We believe every home tells a unique story. Our design process begins with understanding your lifestyle, preferences, and aspirations. We then craft personalized solutions that reflect your personality while maximizing functionality and aesthetic appeal."
  }
};

function HomeInteriors() {
  return (
    <>
      <Helmet>
        <title>Home Interiors | Extraw Designs - Chennai</title>
        <meta name="description" content="Transform your home with Extraw Designs. Expert home interior design services in Chennai including living room, bedroom, kitchen, and complete home makeovers." />
        <meta name="keywords" content="home interiors Chennai, living room design, bedroom design, modular kitchen, home interior designers Chennai" />
        <link rel="canonical" href="https://extrawdesigns.com/services/home-interiors" />
        <meta property="og:title" content="Home Interiors | Extraw Designs - Chennai" />
        <meta property="og:description" content="Transform your home with Extraw Designs. Expert home interior design services in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/services/home-interiors" />
        <link rel="stylesheet" type="text/css" href="/innerpages/assets/css/innerpages.css" />
        <link rel="stylesheet" type="text/css" href="/home1/assets/css/home_1_style.css" />
        <link rel="stylesheet" type="text/css" href="/home2/assets/css/home_2_style.css" />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 post-pg-style1 ">
        <Menu />
        <div className="smooth-scroll-content " id="scrollsmoother-container">
          <Navbar2 />
          <ServiceSlider 
            heroImage={serviceData.heroImage}
            title={serviceData.title}
            breadcrumb={serviceData.breadcrumb}
          />
          <ServiceContent 
            introTitle={serviceData.introTitle}
            introSubtitle={serviceData.introSubtitle}
            introDescription={serviceData.introDescription}
            whyChooseUs={serviceData.whyChooseUs}
            categories={serviceData.categories}
            features={serviceData.features}
          />
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default HomeInteriors;
