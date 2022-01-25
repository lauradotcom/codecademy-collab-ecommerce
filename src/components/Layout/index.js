import React, { useState } from "react";
//
import Header from "./Header";
import CartDrawer from "./CartDrawer";
import MenuModal from "./MenuModal/MenuModal";
//
import "../../styles/global.css";
import "@fontsource/varela";
import "@fontsource/noto-sans";
import "@fontsource/permanent-marker";

const Layout = ({ children }) => {
  // Local state to handle showing cart modal/overlay
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
    if (showMenu) {
      setShowMenu(false);
    }
  };

  // Local state to handle showing menu modal/overlay
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showCart) {
      setShowCart(false);
    }
  };

  return (
    <>
      <Header
        showMenu={showMenu}
        toggleCart={toggleCart}
        toggleMenu={toggleMenu}
      />
      <MenuModal
        showMenu={showMenu}
        closeMenu={toggleMenu}
        toggleMenu={toggleMenu}
      />
      {/* REPLACE with Cart component */}
      <CartDrawer closeCart={toggleCart} showCart={showCart} />
      {children}
    </>
  );
};

export default Layout;
