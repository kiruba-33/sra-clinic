import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import Treatments from './components/Treatments';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-sage/30 selection:text-forest">
      {/* Top Header Navigation (Desktop & Mobile) */}
      <Navbar />

      {/* Main Content Sections arranged in exact CEO-requested order */}
      <main className="flex-grow">
        {/* 1. Hero Section (with Background Image & Minimal Text) */}
        <Hero />

        {/* 2. Doctor Profile (Immediately after Hero) */}
        <DoctorProfile />

        {/* 3. Services / Treatments (Immediately after Doctor Profile) */}
        <Treatments />

        {/* 4. Products (Immediately after Services) */}
        <Products onSelectProduct={handleSelectProduct} />

        {/* 5. About the Clinic (Immediately after Products) */}
        <About />

        {/* 6. Testimonials (Immediately after About) */}
        <Testimonials />

        {/* 7. Gallery / Videos (Immediately after Testimonials and before Footer) */}
        <Gallery />
      </main>

      {/* 8. Footer (Final Section with Contact, Map, Direct Actions, & Bottom Nav Clearance) */}
      <Footer prefilledSubject={selectedProduct} />

      {/* Mobile Fixed Bottom Navigation Bar (Mobile Only with Safe Area Spacing) */}
      <MobileBottomNav />
    </div>
  );
}