import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path="/products/o-trim" element={<ProductDetails name='o-trim' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
