import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";
//
import Form from "./Sections/Form";
import Shipping from "./Sections/Shipping";
import CartProducts from "../../components/Layout/CartDrawer/Sections/CartProducts";
import EmptyCartMessage from "../../components/Layout/CartDrawer/Sections/EmptyCartMessage";
//
import * as styles from "./index.module.css";


const CheckoutPage = () => {
  const cart = useSelector(cartSelector);
  const [page, setPage] = useState('Information');
  const [inputs, setInputs] = useState({
    contactInfo: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    phone: "",
    shipping: ""
  });

 
  const Breadcrumb = () => {
    return (
      <div className={styles.breadcrumb}>
        <span 
          id={styles.info} 
          onClick={() => {setPage('Information');}}
        >
          Information
        </span>
        <span> 
          {/* Display an angle bracket here */}
          --
        </span>
        <span 
          id={styles.shipp} 
          onClick={() => {setPage('Shipping');}}
        >
          Shipping
        </span>
      </div>
    )
  }

  
  const [content, setContent] = useState(
    <Form inputs={inputs} setInputs={setInputs} setPage={setPage}/>
  );
  useEffect(() => {
    if (page === 'Information') {
      document.title = 'Checkout';
      setContent(<Form inputs={inputs} setInputs={setInputs} setPage={setPage}/>);
    } else if (page === 'Shipping') {
      document.title = 'Shipping';
      setContent(<Shipping inputs={inputs} setPage={setPage} />);
    } else {
      document.title = 'Checkout';
    }
  }, [page, inputs])
  

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
