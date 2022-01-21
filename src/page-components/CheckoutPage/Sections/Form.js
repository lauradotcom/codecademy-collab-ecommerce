import React from "react";
import * as styles from "./Form.module.css";

const Form = ({ inputs, setInputs, setPage }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Checkout</h1>
      <form className={styles.form} onSubmit={(e) => {  e.preventDefault(); console.log(inputs)}}>
        <h3>Contact information</h3>
        <input 
          type="text"
          name="contactInfo"
          placeholder="Email"
          onChange={handleChange}
        />

        <h3>Shipping address</h3>
        <div className={styles.inlineForm}>
          <input type='text' placeholder='First name' name='firstName' onChange={handleChange} />
          <input type='text' placeholder='Last name' name='lastName' onChange={handleChange}/>
        </div>
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='Apartment, suite, etc. (optional)'/>
        <input type='text' placeholder='City' />
        <div className={styles.inlineForm}>
          <input type='text' placeholder='Country' />
          <input type='text' placeholder='State' />
          <input type='text' placeholder='Zip code' />
        </div>
        <input type='text' placeholder='Phone' />

      </form>
      <div className={styles.buttonsRow}>
        <button 
          type='submit'
          className={styles.shippingButton} 
          onClick={(e) => {
            setPage('Shipping');
            console.log(inputs);
          }}>
          Continue to shipping
        </button>
        <button className={styles.backButton} onClick={() => {window.history.back()}}>
          Back
        </button>
      </div>
    </>
  );
}
export default Form;
