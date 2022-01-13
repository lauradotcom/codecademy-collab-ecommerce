import React from "react";
//
import * as styles from "./EmptyCartMessage.module.css";

const EmptyCartMessage = ({ closeCart }) => {
  return (
    <div className={styles.root}>
      <div className={styles.msg}>Your cart is currently empty</div>
      <button className={styles.btn} onClick={closeCart}>
        Continue shopping
      </button>
    </div>
  );
};

export default EmptyCartMessage;
