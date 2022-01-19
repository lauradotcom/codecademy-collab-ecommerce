import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";
//
import CartProducts from "../../components/Layout/CartDrawer/Sections/CartProducts";
import OrderSummary from "../../components/Layout/CartDrawer/Sections/OrderSummary";
import EmptyCartMessage from "../../components/Layout/CartDrawer/Sections/EmptyCartMessage";


const CheckoutPage = () => {
  const cart = useSelector(cartSelector);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.totalQuantity > 0 ? (
        <>
          <h2>Cart</h2>
          <CartProducts products={cart.items} />
          <OrderSummary cart={cart} />
        </>
      ) : (
        <EmptyCartMessage />
      )}


      <p>Your cart has {cart.totalQuantity} items.</p>
      <p>
        Total: <strong>{cart.totalPrice}</strong>
      </p>
    </div>
  );
}

export default CheckoutPage;
