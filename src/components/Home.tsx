import React, { useState } from 'react';
import NavBar from './HomaNavBar';
import MoreCards from './Card';
import Cart from './Cart';
import '../App.css'


const Home = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <div>
        <NavBar />
      </div>

      {/* Cards Section */}
      <div>
        <MoreCards />
      </div>

      {/* Cart Section */}
      {openCart && (
        <div className="cart-overlay">
          <Cart setOpenCart={setOpenCart} />
        </div>
      )}
    </>
  );
};

export default Home;
