import React from "react";
//
import { formatPrice } from "../../../../lib/helpers";
//
import * as styles from "./OrderSummary.module.css";


const OrderSummary = ({ cart, closeCart }) => {
  const orderSummaryDetails = [
    ["# of Items", cart.totalQuantity],
    ["Subtotal", formatPrice(cart.totalPrice)],
    ["Shipping", "FREE!"],
    ["Estimated Tax", "Calculated at Checkout"],
    ["Total", formatPrice(cart.totalPrice)],
  ];

  return (
    <div className={styles.orderSummary}>
      <h2 className={styles.title}>Order Summary</h2>
      <hr />
      <div className={styles.details}>
        {orderSummaryDetails.map((item, i) => (
          <div key={item[0]} className={styles.item}>
            <span className={styles.left}>{item[0]}</span>
            <span className={styles.right}>{item[1]}</span>
          </div>
        ))}
      </div>
      <hr />

    </div>
  );
};

export default OrderSummary;
