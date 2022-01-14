import React from "react";
import { useSelector } from 'react-redux';
import { cartSelector } from '../../../../state/cartSlice';
//
import { FaShoppingBag } from 'react-icons/fa';

import * as styles from "./CartButton.module.css";

const CartButton = ({ toggleCart }) => {
  // useSelector accesses Redux state by passing in the cartSelector
  const cart = useSelector(cartSelector);

  return (
    <button onClick={toggleCart}>
    <FaShoppingBag /> {cart.totalQuantity}
    </button>
  );
};

export default CartButton;