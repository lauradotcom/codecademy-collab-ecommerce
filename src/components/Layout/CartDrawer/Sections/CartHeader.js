import React from "react";
import CloseButton from "../../../Buttons/CloseButton";
//
import * as styles from "./CartHeader.module.css";

const CartHeader = ({ closeCart }) => {
  return (
    <div className={styles.cartHeader}>
      <div></div>
      <h1><span>Shopping Bag</span></h1>
      <CloseButton closeCart={closeCart} />
    </div>
  );
};

export default CartHeader;
