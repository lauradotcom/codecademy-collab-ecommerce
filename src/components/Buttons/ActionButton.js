import React from "react";

import * as styles from "./ActionButton.module.css";

const ActionButton = ({ buttonText, onClick, closeCart }) => {
  return (
    <button className={styles.btnAction} onClick={closeCart}>
      {buttonText}
    </button>
  )
}

export default ActionButton;