import React, { useState } from 'react';
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
import AdminPanelModal from './components/AdminPanelModal';
import { CartProvider } from './context/CartContext';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

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
                <BenefitsBar />
                <Products />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer onAdminClick={() => setShowAdmin(true)} />
        <AdminPanelModal show={showAdmin} onHide={() => setShowAdmin(false)} />
      </Router>
    </CartProvider>
  );
}

export default App;
