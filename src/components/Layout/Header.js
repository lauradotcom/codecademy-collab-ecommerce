import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";

const cartOverlay = {
  position: "fixed",
  top: "100px",
  width: "100vw",
  height: "90vh",
  backgroundColor: "black",
};

const Header = () => {
  // Local state to handle showing cart modal/overlay
  const [showCart, setShowCart] = useState(false);
  // useSelector accesses Redux state by passing in the cartSelector
  const cart = useSelector(cartSelector);

  const listItems = [
    { link: "/product", name: "Product" },
    { link: "/test", name: "Test" },
  ];

  // Click handler for showing/hiding the cart
  const showCartHandler = (event) => {
    event.preventDefault();

    setShowCart((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <ul className={styles.headerMenu}>
        <li>
          {/* REPLACE with CartButton component */}
          <button onClick={showCartHandler}>CART</button>
        </li>
        {listItems.map((item) => (
          <li>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* REPLACE with Cart component */}
      {showCart && <div style={cartOverlay}></div>}
    </header>
  );
};

export default Header;
