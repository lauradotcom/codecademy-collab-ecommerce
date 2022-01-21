import React from "react";
import * as styles from "./Form.module.css";
import { handleValidation } from "../../../lib/helpers";

const Form = ({ inputs, setInputs, setPage }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { valid, errors } = handleValidation(inputs);
    if (!valid) {
      let message = "";
      for (const prop in errors) {
        message += errors[prop] + "!\n";
      }
      alert(message);
      return;
    }
    setPage("Shipping");
  };

  return (
    <>
      <h1>Checkout</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <h3>Contact information</h3>
        <input
          // value={inputs.contactInfo}
          type="text"
          name="contactInfo"
          placeholder="Email"
          value={inputs.contactInfo}
          onChange={handleChange}
        />

        <h3>Shipping address</h3>
        <div className={styles.inlineForm}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={inputs.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          name="apartment"
          value={inputs.apartment}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={inputs.city}
          onChange={handleChange}
        />
        <div className={styles.inlineForm}>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={inputs.country}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={inputs.state}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Zip code"
            name="zipCode"
            value={inputs.zipCode}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
        />
      </form>
      <div className={styles.buttonsRow}>
        <button
          type="submit"
          className={styles.shippingButton}
          onClick={handleSubmit}
        >
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
    </>
  );
};
export default Form;
