import React from "react";
import ActionButton from "../../../Buttons/ActionButton";
//
import * as styles from "./EmptyCartMessage.module.css";

const EmptyCartMessage = ({ closeCart }) => {
  return (
    <div className={styles.root}>
      <div className={styles.msg}>Your bag is currently empty.</div>
      <ActionButton buttonText="Continue Shopping" onClick={closeCart} />
    </div>
  );
};

export default EmptyCartMessage;
