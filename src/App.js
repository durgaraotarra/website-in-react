import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
