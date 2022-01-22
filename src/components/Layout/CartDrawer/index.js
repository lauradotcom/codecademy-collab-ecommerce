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

  return (
    <div className={styles.root}>
      <div className={styles.drawerContainer}>
        <CartHeader closeCart={closeCart} />
        {cart.totalQuantity > 0 ? (
          <>
            <div className={styles.productsContainer}>
              <CartProducts products={cart.items} />
            </div>
            <OrderSummary cart={cart} closeCart={closeCart} />
          </>
        ) : (
          <EmptyCartMessage closeCart={closeCart} />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
