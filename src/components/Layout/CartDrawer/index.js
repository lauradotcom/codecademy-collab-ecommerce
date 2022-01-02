import React, { useState } from 'react';
//
import { useSelector } from 'react-redux';
import { cartSelector } from '../../../state/cartSlice';
//
import * as styles from './index.module.css';
//
import { products as productsInCart } from '../../../data/products';

const CartDrawer = ({ closeCart }) => {
  const cart = useSelector(cartSelector);
  const [quantity, setQuantity] = useState(0);
  const removeItem = () => {
    setQuantity(0);
  };

  const orderSummaryDetails = [
    ['# of Items:', cart.totalCount],
    ['Subtotal', cart.totalAmount],
    ['Shipping:', 'FREE!'],
    ['Estimated Tax:', 'Calculated at Checkout'],
    ['Total:', cart.totalAmount],
  ];

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
        {productsInCart.map((product) => (
          <div key={product.id} className={styles.productSection}>
            <img src={product.images[0]} className={styles.productImage} />
            <div className={styles.productDescription}>
              <div>{product.name}</div>
              <div>${product.price.toFixed(2)}</div>
              <div className={styles.actions}>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className={styles.quantityText}>{quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <a className={styles.removeButton} onClick={removeItem}>
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
        {/* {cart.totalCount === 0 ? (
          <>
            <div>Your cart is currently empty</div>
            <button onClick={closeCart}>Continue shopping</button>
          </>
        ) : (
          <>
            <div>Total Amount: {cart.totalAmount}</div>
            <div>Total Count: {cart.totalCount}</div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default CartDrawer;
