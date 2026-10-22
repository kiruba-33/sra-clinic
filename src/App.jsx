import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Treatments from './components/Treatments';
import Products from './components/Products';
import WhyVisit from './components/WhyVisit';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-sage/30 selection:text-forest">
      {/* A. Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* B. Hero Section */}
        <Hero />

        {/* C. Clinic Introduction */}
        <Introduction />

        {/* D. About the Clinic */}
        <About />

        {/* E. Treatments and Services */}
        <Treatments />

        {/* F. Products Section */}
        <Products onSelectProduct={handleSelectProduct} />

        {/* G. Why Visit the Clinic */}
        <WhyVisit />

        {/* H. Appointment and Contact Section */}
        <Contact prefilledSubject={selectedProduct} />
      </main>

      {/* I. Footer */}
      <Footer />
    </div>
  );
}