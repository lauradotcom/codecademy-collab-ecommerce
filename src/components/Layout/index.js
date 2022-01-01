import React, { useState } from "react";
import Header from "./Header";

import "../../styles/global.css";

const cartOverlay = {
  position: "fixed",
  top: "100px",
  width: "100vw",
  height: "90vh",
  backgroundColor: "black",
};

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
      {showCart && <div style={cartOverlay}></div>}
      {children}
    </>
  );
};

export default Layout;
