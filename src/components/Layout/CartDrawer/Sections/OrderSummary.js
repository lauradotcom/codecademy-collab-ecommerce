import React from "react";
//
import * as styles from "./OrderSummary.module.css";

const OrderSummary = ({ cart }) => {
  const orderSummaryDetails = [
    ["# of Items:", cart.totalCount],
    ["Subtotal", cart.totalAmount],
    ["Shipping:", "FREE!"],
    ["Estimated Tax:", "Calculated at Checkout"],
    ["Total:", cart.totalAmount],
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
        <button
          className={styles.btn}
          onClick={() =>
            alert(
              `Purchasing ${cart.totalCount} items for $${cart.totalAmount}`
            )
          }
        >
          Proceed with Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
