import React from "react";
//
import { useSelector } from "react-redux";
import { cartSelector } from "../../../state/cartSlice";
//
import CartHeader from "./Sections/CartHeader";
import CartProducts from "./Sections/CartProducts";
import OrderSummary from "./Sections/OrderSummary";
import EmptyCartMessage from "./Sections/EmptyCartMessage";
//
import * as styles from "./index.module.css";

const CartDrawer = ({ closeCart }) => {
  const cart = useSelector(cartSelector);
  const { items, totalQuantity, totalPrice } = cart;

  return (
    <div className={styles.root}>
      <div className={styles.drawerContainer}>
        <CartHeader closeCart={closeCart} />
        <hr />
        {cart.totalQuantity > 0 ? (
          <>
            <CartProducts products={cart.items} />
            <OrderSummary cart={cart} />
          </>
        ) : (
          <EmptyCartMessage closeCart={closeCart} />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
