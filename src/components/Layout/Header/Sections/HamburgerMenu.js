import React from "react";
import { FaBars } from "react-icons/fa";

import * as styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ toggleMenu }) => {

  return (
    <div className={styles.root} role="button">
      <FaBars className={styles.menuIcon} onClick={toggleMenu}/>
    </div>
  );
};

export default HamburgerMenu;