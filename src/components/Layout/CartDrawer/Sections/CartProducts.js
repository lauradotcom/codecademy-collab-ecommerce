import React from "react";
//
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../../state/cartSlice";
import { formatPrice } from "../../../../lib/helpers";
//
import * as styles from "./CartProducts.module.css";

const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

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

  return products.map((product) => (
    <div key={product.id} className={styles.productSection}>
      <img
        src={product.images[0]}
        className={styles.productImage}
        alt="product"
      />
      <div className={styles.productDetails}>
        <div>{product.name}</div>
        <div>{formatPrice(product.price)}</div>
        <div className={styles.actions}>
          <button
            className={styles.quantityButton}
            onClick={() => updateItemQuantity(product, false)}
          >
            -
          </button>
          <span className={styles.quantityText}>{product.quantity}</span>
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
  ));
};

export default CartProducts;
