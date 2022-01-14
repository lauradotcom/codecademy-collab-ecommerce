import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../../state/cartSlice";

import * as styles from "./CartQuantity.module.css";

const CartQuantity = () => {

  // useSelector accesses Redux state by passing in the cartSelector
  const cart = useSelector(cartSelector);

  return (
    <>
    {cart.totalQuantity}
    </>
  );
};

export default CartQuantity;