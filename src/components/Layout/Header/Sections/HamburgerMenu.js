import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import * as styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ open, setOpen }) => {

  return (
    <>
      <FaBars open={open} onClick={() => setOpen(!open)} />
    </>
  );
};

export default HamburgerMenu;