import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";
//
import CartProducts from "../../components/Layout/CartDrawer/Sections/CartProducts";
import EmptyCartMessage from "../../components/Layout/CartDrawer/Sections/EmptyCartMessage";
//
import * as styles from "./index.module.css";

const CheckoutPage = () => {
  const cart = useSelector(cartSelector);

  return (
    <main className={styles.main}>
      <section className={styles.sectionOne}>
        <h1>Checkout</h1>
        <div className={styles.form}>
          <h3>Contact information</h3>
          <input type='text' placeholder='Email or mobile phone number' />

          <h3>Shipping address</h3>
          <div className={styles.inlineForm}>
            <input type='text' placeholder='First name'/>
            <input type='text' placeholder='Last name'/>
          </div>
          <input type='text' placeholder='Address'/>
          <input type='text' placeholder='Apartment, suite, etc. (optional)'/>
          <input type='text' placeholder='City'/>
          <div className={styles.inlineForm}>
            <input type='text' placeholder='Country'/>
            <input type='text' placeholder='State'/>
            <input type='text' placeholder='Zip code'/>
          </div>
          <input type='text' placeholder='Phone'/>

        </div>
        <div className={styles.buttonsRow}>
          <button className={styles.shippingButton}>
            Continue to shipping
          </button>
          <button 
            className={styles.backButton}
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
        </div>
      </section>
      <div className={styles.separator}/>
      <section className={styles.sectionTwo}>
        {cart.totalQuantity > 0 ? (
          <>
            <CartProducts products={cart.items} />
            <div className={styles.hSeparator} />
            <div className={styles.subtotalContainer}> {/* */}
            
              <div className={styles.subtotal}>
                <span className={styles.subL}>Subtotal:</span>
                <span className={styles.subR}>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className={styles.shipping}>
                <span className={styles.subL}>Shipping:</span>
                <span className={styles.subR}>Calculated at next step</span>
              </div>
            
            </div>
          </>
        ) : (
          <EmptyCartMessage />
        )}
        <div className={styles.hSeparator}/>
        <div className={styles.totalPriceContainer}>
          <p className={styles.total}>Total:</p>
          <p className={styles.finalPrice}>${cart.totalPrice.toFixed(2)}</p>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;
