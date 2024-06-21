import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Kids from './components/Kids';
import Description from './components/Description';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Description" element={<Description/>}/>
      </Routes>
    </Router>
  );
};

export default App;
