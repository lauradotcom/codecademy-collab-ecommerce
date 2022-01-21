import React from "react";
import { Link } from "gatsby";
//
import { formatPrice } from "../../../../lib/helpers";
//
import * as styles from "./OrderSummary.module.css";


const OrderSummary = ({ cart, closeCart }) => {
  const orderSummaryDetails = [
    ["# of Items:", cart.totalQuantity],
    ["Subtotal", formatPrice(cart.totalPrice)],
    ["Shipping:", "FREE!"],
    ["Estimated Tax:", "Calculated at Checkout"],
    ["Total:", formatPrice(cart.totalPrice)],
  ];

  return (
    <div className={styles.orderSummary}>
      <div className={styles.title}>Order Summary</div>

      <div className={styles.details}>
        {orderSummaryDetails.map((item, i) => (
          <div key={item[0]} className={styles.item}>
            <span className={styles.left}>{item[0]}</span>
            <span className={styles.right}>{item[1]}</span>
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <Link to="/checkout" className={styles.btn} onClick={closeCart} >
          Proceed with Order
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
