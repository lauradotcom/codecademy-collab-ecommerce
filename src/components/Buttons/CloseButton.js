import React from "react";

import * as styles from "./CloseButton.module.css";

const CloseButton = ({ closeCart }) => {

  return (
    <button className={styles.closeCartBtn} onClick={closeCart}>
    Close
  </button>
  )
}

export default CloseButton;