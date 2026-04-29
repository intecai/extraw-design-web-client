import React from 'react';
import Footer from '../../components/home2/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import ServiceSlider from '../../components/innerpage/services/ServiceSlider';
import ServiceContent from '../../components/innerpage/services/ServiceContent';
import { Helmet } from 'react-helmet';

const serviceData = {
  heroImage: "/assets/services/restaurant-interiors/restaurant-interior.jpg",
  breadcrumb: [
    { label: "Services", href: "/services" },
    { label: "Commercial Restaurant Interiors", href: "/services/commercial-restaurant-interiors" }
  ],
  title: "Premier Commercial Restaurants Interior Designing Company in Chennai",
  introTitle: "Premier Commercial Restaurants Interior Designing Company in Chennai",
  introSubtitle: "Commercial Restaurant Interiors",
  introDescription: "Welcome to Extraw Designs, the leading commercial restaurants interior designing company in Chennai, where creativity meets functionality to craft extraordinary dining spaces. We specialize in creating visually stunning and efficient interiors that reflect your restaurant's concept, enhance the dining experience, and attract more patrons. From luxury fine-dining restaurants to cozy cafes, our designs cater to diverse culinary styles and brand identities.",
  whyChooseUs: {
    title: "Extraw Designs For Your Commercial Restaurant Interiors",
    items: [
      { title: "Customized Solutions", description: "Designs tailored to your restaurant's concept and brand identity." },
      { title: "Attention to Detail", description: "Every element, from lighting to furniture, is meticulously curated." },
      { title: "Unmatched Expertise", description: "Over 9 years of experience in restaurant interior design." },
      { title: "On-Time Delivery", description: "We value your time and ensure timely project completion." }
    ]
  },
  categories: {
    title: "Commercial Restaurants Interiors We Specialize In",
    items: [
      { title: "Fine Dining Restaurant", description: "Sophisticated spaces with elegant designs, luxurious finishes, and ambient lighting for a premium dining experience." },
      { title: "Casual Dining Restaurant", description: "Relaxed yet stylish interiors designed to create a friendly and welcoming atmosphere for everyday dining." },
      { title: "Café and Bistro", description: "Charming and cozy spaces with a creative touch, perfect for coffee enthusiasts and casual gatherings." },
      { title: "Themed Restaurant", description: "Unique interiors tailored to your restaurant's theme, providing an immersive and unforgettable dining experience." },
      { title: "Fast-Food Restaurant", description: "Functional layouts with vibrant and energetic designs for quick service and high customer turnover." },
      { title: "Bar and Lounge", description: "Sophisticated designs with mood lighting and plush seating for an elegant and engaging nightlife experience." }
    ]
  },
  features: {
    image: "/assets/services/restaurant-interiors/restaurant-interior-2.jpg",
    title: "Our Approach to Restaurant Interiors",
    description: "We believe that a restaurant's interior is as important as its menu. Our design team creates atmospheres that complement your cuisine, engage your guests, and create memorable dining experiences that keep them coming back."
  }
};

function CommercialRestaurantInteriors() {
  return (
    <>
      <Helmet>
        <title>Commercial Restaurant Interiors | Extraw Designs - Chennai</title>
        <meta name="description" content="Premier commercial restaurant interior design company in Chennai. Stunning dining spaces, cafes, bars, and themed restaurants designed to attract customers." />
        <meta name="keywords" content="restaurant interior design Chennai, commercial restaurant interiors, cafe design, bar interiors, themed restaurant design" />
        <link rel="canonical" href="https://extrawdesigns.com/services/commercial-restaurant-interiors" />
        <meta property="og:title" content="Commercial Restaurant Interiors | Extraw Designs - Chennai" />
        <meta property="og:description" content="Premier commercial restaurant interior design company in Chennai." />
        <meta property="og:url" content="https://extrawdesigns.com/services/commercial-restaurant-interiors" />
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

export default CommercialRestaurantInteriors;
