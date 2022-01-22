import React from "react";

import * as styles from "./ActionButton.module.css";

const ActionButton = ({ buttonText, onClick }) => {
  return (
    <button className={styles.btnAction} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default ActionButton;