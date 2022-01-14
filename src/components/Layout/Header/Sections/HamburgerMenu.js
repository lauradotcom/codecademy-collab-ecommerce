import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import * as styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ toggleMenu }) => {

  return (
    <>
      <FaBars className={styles.menuIcon} onClick={toggleMenu}/>
    </>
  );
};

export default HamburgerMenu;