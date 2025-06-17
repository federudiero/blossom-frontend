import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlossomNavbar from './components/BlossomNavbar';
import Hero from './components/Hero';
import About from './components/About';

import Gallery from './components/Gallery';

import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart'; // Componente de carrito
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import BenefitsBar from './components/BenefitsBar';
import AdminPanelModal from './components/AdminPanelModal';





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
              <BenefitsBar/>
                <About />
                <Gallery />
                <BenefitsBar/>
                <Products />
            
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
<AdminPanelModal />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
