import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlossomNavbar from './components/BlossomNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import BenefitsBar from './components/BenefitsBar';
import ProtectedAdminPanel from './components/ProtectedAdminPanel.jsx'; // ✅ correcto

import GalleryAlt from './components/GalleryAlt';
import Resultados from './components/Resultados';
import  CarruselMarca from './components/CarruselMarca>';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <BlossomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BenefitsBar />
                <About />
                <Gallery />
                <GalleryAlt/>
               
                <Products />
                 <CarruselMarca />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/admin" element={<ProtectedAdminPanel />} /> {/* ✅ protegido */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
