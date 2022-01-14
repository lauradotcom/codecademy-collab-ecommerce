import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../../state/cartSlice";

import * as styles from "./CartQuantity.module.css";

const CartQuantity = () => {

  // useSelector accesses Redux state by passing in the cartSelector
  const cart = useSelector(cartSelector);

  return (
    <div className={styles.quantityContainer}>
      <span className={styles.quantityCount}>{cart.totalQuantity}</span>
    </div>
  );
};

export default CartQuantity;