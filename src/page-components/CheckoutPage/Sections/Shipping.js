import React from "react";
import { navigate } from "gatsby";
//
import * as styles from "./Shipping.module.css";
import { handleValidation } from "../../../lib/helpers";
import { useDispatch } from "react-redux";
import { clearItems } from "../../../state/cartSlice";

const Shipping = ({ inputs, setPage, setInputs }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { valid, errors } = handleValidation(inputs, true);
    if (!valid) {
      let message = "";
      for (const prop in errors) {
        message += errors[prop] + "!\n";
      }
      alert(message);
      return;
    }
    navigate("/checkout/order/", { replace: true });
    dispatch(clearItems());
  };

  return (
    <>
      <h1>Checkout</h1>
      <h3>Contact information</h3>
      <div className={styles.prevInformation}>
        <div className={styles.infoRow}>
          <p>Contact</p>
          <p>{inputs.contactInfo}</p>
          <span
            onClick={() => setPage("Information")}
            onKeyPress={() => setPage("Information")}
            tabIndex={0}
            role="button"
          >
            Change
          </span>
        </div>
        <div className={styles.rowDivider} />
        <div className={styles.infoRow}>
          <p>Ship to</p>
          <p>{`${inputs.address}${
            inputs.apartment ? ` ${inputs.apartment}` : ""
          }, ${inputs.city}, ${inputs.zipCode}`}</p>
          <span
            onClick={() => setPage("Information")}
            onKeyPress={() => setPage("Information")}
            tabIndex={0}
            role="button"
          >
            Change
          </span>
        </div>
      </div>
      <h3>Shipping method</h3>
      <div className={styles.shippMethod}>
        <div className={styles.shippRow}>
          <input
            id="usps"
            type="radio"
            name="shipping"
            value="usps"
            onClick={handleChange}
          />
          <div className={styles.childrens}>
            <div>
              <label htmlFor="usps">USPS Priority Mail</label>
              <p>5 business days</p>
            </div>
            <span>$4.90</span>
          </div>
        </div>
        <div className={styles.rowDivider} />
        <div className={styles.shippRow}>
          <input
            id="usps-express"
            type="radio"
            name="shipping"
            value="usps-express"
            onClick={handleChange}
          />
          <div className={styles.childrens}>
            <div>
              <label htmlFor="usps-express">USPS Priority Mail Express</label>
              <p>1 business day</p>
            </div>
            <span>$14.90</span>
          </div>
        </div>
      </div>
      <div className={styles.buttonsRow}>
        <button className={styles.shippingButton} onClick={handleSubmit}>
          Checkout order
        </button>
        <button
          className={styles.backButton}
          onClick={() => setPage("Information")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Shipping;
