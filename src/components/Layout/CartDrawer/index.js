import React from "react";
//
import { useDispatch, useSelector } from "react-redux";
import { addItem, cartSelector, removeItem } from "../../../state/cartSlice";
//
import * as styles from "./index.module.css";

const CartDrawer = ({ closeCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const orderSummaryDetails = [
    ["# of Items:", cart.totalCount],
    ["Subtotal", cart.totalAmount],
    ["Shipping:", "FREE!"],
    ["Estimated Tax:", "Calculated at Checkout"],
    ["Total:", cart.totalAmount],
  ];

  const updateItemQuantity = (item, add, clear) => {
    if (add) {
      dispatch(
        addItem({
          ...item,
          quantity: 1,
        })
      );
    } else if (clear) {
      dispatch(removeItem(item));
    } else {
      dispatch(
        removeItem({
          ...item,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.drawerContainer}>
        <div className={styles.cartHeader}>
          <span>Shopping Cart</span>
          <button className={styles.closeCartBtn} onClick={closeCart}>
            Close
          </button>
        </div>
        <hr />
        {cart.totalQuantity > 0 && (
          <>
            {cart.items.map((product) => (
              <div key={product.id} className={styles.productSection}>
                <img src={product.images[0]} className={styles.productImage} />
                <div className={styles.productDescription}>
                  <div>{product.name}</div>
                  <div>${product.price.toFixed(2)}</div>
                  <div className={styles.actions}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateItemQuantity(product, false)}
                    >
                      -
                    </button>
                    <span className={styles.quantityText}>
                      {product.quantity}
                    </span>
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateItemQuantity(product, true)}
                    >
                      +
                    </button>
                  </div>
                  <a
                    className={styles.removeButton}
                    onClick={() => updateItemQuantity(product, false, true)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            ))}
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
          </>
        )}
        {cart.totalQuantity === 0 ? (
          <>
            <div>Your cart is currently empty</div>
            <button onClick={closeCart}>Continue shopping</button>
          </>
        ) : (
          <>
            <div>Total Amount: {cart.totalAmount}</div>
            <div>Total Count: {cart.totalCount}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
