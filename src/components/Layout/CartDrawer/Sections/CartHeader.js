import React from "react";
//
import * as styles from "./CartHeader.module.css";

const CartHeader = ({ closeCart }) => {
  return (
    <div className={styles.cartHeader}>
      <div></div>
      <h1><span>Shopping Bag</span></h1>
      <button className={styles.closeCartBtn} onClick={closeCart}>
        Close
      </button>
    </div>
  );
};

export default CartHeader;
