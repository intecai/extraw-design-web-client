import React from 'react';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import ServiceSlider from '../../components/innerpage/services/ServiceSlider';
import ServiceContent from '../../components/innerpage/services/ServiceContent';
import { Helmet } from 'react-helmet';

const serviceData = {
  heroImage: "/assets/services/architecture-interior-design/architecture-interior-design.jpg",
  breadcrumb: [
    { label: "Services", href: "/services" },
    { label: "Architecture & Interior Design", href: "/services/architecture-interior-design" }
  ],
  title: "Best Architecture & Interior Design Solutions",
  introTitle: "Premier Architecture & Interior Design Company in Chennai",
  introSubtitle: "Architecture & Interior Design",
  introDescription: "Welcome to Extraw Designs, the leading architecture and interior design company in Chennai, where visionary design meets impeccable craftsmanship. We specialize in creating comprehensive architectural solutions that transform spaces from the ground up, combining structural excellence with stunning interior aesthetics. From concept to completion, our integrated approach ensures seamless harmony between your building's architecture and its interior spaces.",
  whyChooseUs: {
    title: "Extraw Designs For Your Architecture & Interior Design",
    items: [
      { title: "Customized Solutions", description: "Designs tailored to your vision, lifestyle, and functional requirements." },
      { title: "Attention to Detail", description: "Every architectural element and interior detail is meticulously planned and executed." },
      { title: "Unmatched Expertise", description: "Over 9 years of experience in architecture and interior design." },
      { title: "On-Time Delivery", description: "We value your time and ensure timely project completion." }
    ]
  },
  categories: {
    title: "Architecture & Interior Design Services",
    items: [
      { title: "Residential Architecture", description: "Designs that transform houses into homes, focusing on comfort, aesthetics, and functional living spaces" },
      { title: "Commercial Architecture", description: "Sophisticated designs for offices, retail spaces, and commercial hubs ensuring functionality and visual appeal." },
      { title: "Industrial Architecture", description: "Tailored layouts optimizing workflow, safety, and functionality for manufacturing units and industrial facilities." },
      { title: "Urban Planning", description: "Smart city concepts and sustainable urban designs ensuring efficient land use and infrastructure development." },
      { title: "Landscape Architecture", description: " Creative outdoor designs integrating nature with structures for aesthetically pleasing and functional spaces." },
      { title: "Interior Architecture", description: "Detailed designs merging interiors with architectural elements for cohesive and harmonious environments." }
    ]
  },
  features: {
    image: "/assets/services/architecture-interior-design/architecture-interior-design-2.jpg",
    title: "Our Approach to Architecture & Interior Design",
    description: "We believe that great architecture and interior design should work in perfect harmony. Our integrated approach ensures that every structural decision enhances the interior experience, and every interior choice is supported by solid architectural foundations. From the initial concept to the final reveal, we orchestrate every detail to create spaces that inspire."
  }
};

function ArchitectureInteriorDesign ()
{
  return (
    <>
      <Helmet>
        <title>Architecture & Interior Design | Extraw Designs - Chennai</title>
        <meta name="description" content="Premier architecture and interior design company in Chennai. Comprehensive architectural solutions from concept to completion, combining structural excellence with stunning interiors." />
        <meta name="keywords" content="architecture design Chennai, interior architecture, residential architecture, commercial architecture, 3D visualization, project management" />
        <link rel="canonical" href="https://extrawdesigns.com/services/architecture-interior-design" />
        <meta property="og:title" content="Architecture & Interior Design | Extraw Designs - Chennai" />
        <meta property="og:description" content="Premier architecture and interior design company in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/services/architecture-interior-design" />
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
            heroImage={ serviceData.heroImage }
            title={ serviceData.title }
            breadcrumb={ serviceData.breadcrumb }
          />
          <ServiceContent
            introTitle={ serviceData.introTitle }
            introSubtitle={ serviceData.introSubtitle }
            introDescription={ serviceData.introDescription }
            whyChooseUs={ serviceData.whyChooseUs }
            categories={ serviceData.categories }
            features={ serviceData.features }
          />
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ArchitectureInteriorDesign;
