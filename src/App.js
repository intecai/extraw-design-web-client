import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home1 from './pages/home1';
import AboutPage from './pages/innerpages/about';
import ContactPage from './pages/innerpages/contact';
import ServicesPage from './pages/innerpages/services';

import Home3 from './pages/home3_construction';
import Home6 from './pages/home6_furniture';
import ArchitectureInteriorDesign from './pages/innerpages/ArchitectureInteriorDesign';
import CommercialRestaurantInteriors from './pages/innerpages/CommercialRestaurantInteriors';
import CorporateInteriors from './pages/innerpages/CorporateInteriors';
import HomeInteriors from './pages/innerpages/HomeInteriors';
import Loader from './components/common/Loader';
import SingleProject from './pages/innerpages/single_project';
import Footer from './components/home2/Footer';
import Project from './components/house2/Project';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={< Home6 />} />
          <Route path="/services" element={<Home3 />} />
          <Route
  path="/projects"
  element={
    <>
      <Project />
      <Footer />
    </>
  }
/>
          
          <Route path="/services/home-interiors" element={<HomeInteriors />} />
          <Route path="/services/corporate-interiors" element={<CorporateInteriors />} />
          <Route path="/services/commercial-restaurant-interiors" element={<CommercialRestaurantInteriors />} />
          <Route path="/services/architecture-interior-design" element={<ArchitectureInteriorDesign />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
