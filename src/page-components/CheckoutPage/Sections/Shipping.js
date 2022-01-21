import React from "react";
import { Link } from 'gatsby';
//
import * as styles from "./Shipping.module.css";

const Shipping = ({ inputs, setPage }) => {
  return (
    <>
    <h1>Checkout</h1>
    <h3>Contact information</h3>
      <div className={styles.prevInformation}>
        <div className={styles.infoRow}>
          <p>Contact</p>
          <p>longlongusername@example.com</p>
          <span onClick={() => setPage('Information')}>Change</span>
        </div>
        <div className={styles.rowDivider}/>
        <div className={styles.infoRow}>
          <p>Ship to</p>
          <p>Sweet avenue #404, NY, admin</p>
          <span onClick={() => setPage('Information')}>Change</span>
        </div>
      </div>
      <h3>Shipping method</h3>
      <div className={styles.shippMethod}>
        <div className={styles.shippRow}>
          <input type='radio' name='shipping' value='usps'/>
          <div className={styles.childrens}>
            <div>
              <label>USPS Priority Mail</label>
              <p>5 business days</p>
            </div>
            <span>$4.90</span>
          </div>
        </div>
        <div className={styles.rowDivider}/>
        <div className={styles.shippRow}>
          <input type='radio' name='shipping' value='usps-express' />
          <div className={styles.childrens}>
            <div>
              <label>USPS Priority Mail Express</label>
              <p>1 business day</p>
            </div>
            <span>$14.90</span>
          </div>
        </div>
      </div>
      <div className={styles.buttonsRow}>
        <Link 
          to='/checkout/order/' 
          className={styles.link}
          // On click, clean the cart
          onClick={() => {
            localStorage.removeItem('cart');
            localStorage.removeItem('cartTotal');
          }}
        >
          <button className={styles.shippingButton}>
            Checkout order
          </button>
        </Link>
        <button className={styles.backButton} onClick={() => {setPage('Information')}}>
          Back
        </button>
      </div>
    </>
  );
}

export default Shipping;
