import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footers from './components/utils/Footer';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/utils/Contact';
import HomeProducts from './components/HomeProducts';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar companyName="Eazee Tech" />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<HomeProducts />} />
            {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      <Footers /> 
      </Router>
    </div>
  );
}
