import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";
//
import CartProducts from "../../components/Layout/CartDrawer/Sections/CartProducts";
import EmptyCartMessage from "../../components/Layout/CartDrawer/Sections/EmptyCartMessage";
//
import * as styles from "./index.module.css";


const CheckoutPage = () => {
  const cart = useSelector(cartSelector);
  const [page, setPage] = useState('Information');

  const Breadcrumb = () => {
    return (
      <div className={styles.breadcrumb}>
        <span 
          id={styles.info} 
          onClick={() => {
            setPage('Information');
          }}>
          Information
        </span>
        <span> > </span>
        <span 
          id={styles.shipp} 
          onClick={() => {
            setPage('Shipping');
          }}>
          Shipping
        </span>
      </div>
    )
  }

  const Form = () => {
    return (
      <>
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
          <button className={styles.shippingButton} onClick={() => {setPage('Shipping')}}>
            Continue to shipping
          </button>
          <button className={styles.backButton} onClick={() => {window.history.back()}}>
            Back
          </button>
        </div>
      </>
    );
  }
  
  const Shipping = () => {
    return (
      <>
        <h3>Shiping method</h3>
        <div className={styles.shippMethod}>
          <div className={styles.shippRow}>
            <input type='radio' name='usps'/>
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
            <input type='radio' name='usps-express'/>
            <div className={styles.childrens}>
              <div>
                <label>USPS Priority Mail Express</label>
                <p>1 business days</p>
              </div>
              <span>$14.90</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonsRow}>
          <button className={styles.shippingButton}>
            Checkout order
          </button>
          <button className={styles.backButton} onClick={() => {setPage('Information')}}>
            Back
          </button>
        </div>
      </>
    );
  }
  
  
  const [content, setContent] = useState(<Form />);
  useEffect(() => {
    if (page === 'Information') {
      document.title = 'Checkout';
      setContent(<Form />);
    } else if (page === 'Shipping') {
      document.title = 'Shipping';
      setContent(<Shipping />);
    } else {
      document.title = 'Checkout';
    }
  }, [page])

  return (
    <main className={styles.main}>
      <section className={styles.sectionOne}>
        <Breadcrumb />
        {content}
      </section>
      <div className={styles.separator}/>
      <section className={styles.sectionTwo}>
        <h1>Order summary</h1>
        {cart.totalQuantity > 0 ? (
          <>
            <CartProducts products={cart.items} />
            <div className={styles.hSeparator} />
            <div className={styles.subtotalContainer}>
            
              <div>
                <span className={styles.subL}>Subtotal:</span>
                <span className={styles.subR}>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div>
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
