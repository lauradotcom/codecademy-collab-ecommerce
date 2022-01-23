import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as styles from "./CloseButton.module.css";

const CloseButton = ({ closeCart }) => {

  return (
    <AiOutlineClose className={styles.closeCartBtn} onClick={closeCart} />
  )
}

export default CloseButton;