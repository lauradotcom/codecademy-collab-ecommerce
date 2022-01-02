import React, { useState } from 'react';
//
import Header from './Header';
import CartDrawer from './CartDrawer';
//
import '../../styles/global.css';

const Layout = ({ children }) => {
  // Local state to handle showing cart modal/overlay
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Header toggleCart={toggleCart} />
      {/* REPLACE with Cart component */}
      {showCart && <CartDrawer closeCart={toggleCart} />}
      {children}
    </>
  );
};

export default Layout;
