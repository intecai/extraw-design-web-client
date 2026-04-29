import React from 'react';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import ServiceSlider from '../../components/innerpage/services/ServiceSlider';
import ServiceContent from '../../components/innerpage/services/ServiceContent';
import { Helmet } from 'react-helmet';

const serviceData = {
  heroImage: "/assets/services/corporate-interiors/corporate-interior.jpg",
  breadcrumb: [
    { label: "Services", href: "/services" },
    { label: "Corporate Interiors", href: "/services/corporate-interiors" }
  ],
  title: "Transforming Spaces with Elite Interior Designs",
  introTitle: "Leading Corporate Interior Design Company in Chennai",
  introSubtitle: "Corporate Interiors",
  introDescription: "Welcome to Extraw Designs, the trusted name for innovative and functional corporate interior design solutions. As a premier corporate interior designing company in Chennai, we specialize in creating workspaces that inspire creativity, enhance productivity, and reflect your brand identity. Whether you're designing a new office or renovating an existing one, our expert team ensures every detail aligns with your vision.",
  whyChooseUs: {
    title: "Extraw Designs For Your Corporate Interiors",
    items: [
      { title: "Customized Solutions", description: "Designs tailored to your corporate culture and brand identity." },
      { title: "Attention to Detail", description: "Every element, from furniture placement to colour palettes, is meticulously curated." },
      { title: "Unmatched Expertise", description: "Over 9 years of experience in corporate interior design." },
      { title: "On-Time Delivery", description: "We value your time and ensure timely project completion." }
    ]
  },
  categories: {
    title: "Corporate Interiors We Specialize In",
    items: [
      { title: "Executive Office Design", description: "Sophisticated designs with premium finishes to create a professional and inspiring space for leaders." },
      { title: "Open Workstation", description: "Collaborative and ergonomic layouts promote teamwork while maximizing space efficiency and comfort." },
      { title: "Conference Rooms", description: "Technologically equipped, acoustically optimized rooms for effective collaboration and professional discussions." },
      { title: "Reception & Lobby Areas", description: "Welcoming and impactful designs that leave a lasting impression on clients and visitors." },
      { title: "Breakout Spaces", description: "Relaxing areas designed to rejuvenate employees, encouraging interactions and creative thinking." },
      { title: "Cafeteria Design", description: "Inviting and functional dining areas that offer a refreshing experience during work breaks." }
    ]
  },
  features: {
    image: "/assets/services/corporate-interiors/corporate-interior-2.jpg",
    title: "Our Approach to Corporate Interiors",
    description: "We understand that your workspace is a reflection of your brand and company culture. Our design philosophy focuses on creating environments that boost employee morale, impress clients, and optimize workflow efficiency while maintaining aesthetic excellence."
  }
};

function CorporateInteriors() {
  return (
    <>
      <Helmet>
        <title>Corporate Interiors | Extraw Designs - Chennai</title>
        <meta name="description" content="Leading corporate interior design company in Chennai. Professional office interiors, workstations, conference rooms, and reception areas designed for productivity and brand identity." />
        <meta name="keywords" content="corporate interiors Chennai, office interior design, workstation design, conference room design, corporate office interiors" />
        <link rel="canonical" href="https://extrawdesigns.com/services/corporate-interiors" />
        <meta property="og:title" content="Corporate Interiors | Extraw Designs - Chennai" />
        <meta property="og:description" content="Leading corporate interior design company in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/services/corporate-interiors" />
        <link rel="stylesheet" type="text/css" href="/innerpages/assets/css/innerpages.css" />
        <link rel="stylesheet" type="text/css" href="/home1/assets/css/home_1_style.css" />
        <link rel="stylesheet" type="text/css" href="/home2/assets/css/home_2_style.css" />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 post-pg-style1">
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
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

export default CorporateInteriors;
