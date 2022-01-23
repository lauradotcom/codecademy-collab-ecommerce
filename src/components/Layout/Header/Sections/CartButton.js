import React from "react";
//
import { FaShoppingBag } from "react-icons/fa";
import CartQuantity from "./CartQuantity";
import * as styles from "./CartButton.module.css";

const CartButton = ({ toggleCart, setShowMenu }) => {

  return (
    <div className={styles.cartButtonContainer}>
      <FaShoppingBag 
        className={styles.menuIcon} 
        onClick={toggleCart} /> 
      <CartQuantity />
    </div>
  );
};

export default CartButton;