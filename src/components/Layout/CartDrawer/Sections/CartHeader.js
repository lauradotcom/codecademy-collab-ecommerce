import React from "react";
//
import * as styles from "./CartHeader.module.css";

const CartHeader = ({ closeCart }) => {
  return (
    <div className={styles.cartHeader}>
      <span>Shopping Cart</span>
      <button className={styles.closeCartBtn} onClick={closeCart}>
        Close
      </button>
    </div>
  );
};

export default CartHeader;
