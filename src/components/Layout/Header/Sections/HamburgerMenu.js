import React from "react";

import * as styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ showMenu, toggleMenu }) => {

  return (
    <div className={styles.root}>
      <div
        className={showMenu ? `${styles.active}` : ""}
        onClick={toggleMenu}
        onKeyPress={toggleMenu}
        tabIndex={0}
        role="button"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
