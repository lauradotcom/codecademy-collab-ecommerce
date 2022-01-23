import React from "react";
import { navigate } from "gatsby";
//
import { useSelector } from "react-redux";
import { cartSelector } from "../../../state/cartSlice";
//
import CartHeader from "./Sections/CartHeader";
import CartProducts from "./Sections/CartProducts";
import OrderSummary from "./Sections/OrderSummary";
import EmptyCartMessage from "./Sections/EmptyCartMessage";
import ActionButton from "../../Buttons/ActionButton";
//
import * as styles from "./index.module.css";

const CartDrawer = ({ closeCart, showCart }) => {
  const cart = useSelector(cartSelector);

  return (
    <div 
      className={styles.root} 
      onClick={closeCart}
      onKeyPress={closeCart}
      aria-hidden="true"
    >
      <div 
        className={
          showCart
          ? `${styles.drawerContainer} ${styles.open}`
          : `${styles.drawerContainer} ${styles.closed}`
        } 
        onClick={e => e.stopPropagation()}
        onKeyPress={e => e.stopPropagation()}
        role="dialog"
      >
        <CartHeader closeCart={closeCart} />
        {cart.totalQuantity > 0 ? (
          <>
            <div className={styles.productsContainer}>
              <CartProducts products={cart.items} />
            </div>
            <OrderSummary cart={cart} />
            <ActionButton 
              className={styles.actionButton}
              buttonText="Proceed with Order" 
              onClick={() => {
                navigate("/checkout");
                closeCart();
              }}
            />
          </>
        ) : (
          <EmptyCartMessage closeCart={closeCart} />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
