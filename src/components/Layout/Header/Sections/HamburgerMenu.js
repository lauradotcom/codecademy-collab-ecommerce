import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import * as styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ open, setOpen }) => {

  const listItems = [
    { link: '/product', name: 'Product' },
    { link: '/test', name: 'Test' },
  ];

  return (
    <>
      <FaBars open={open} onClick={() => setOpen(!open)} />
      <ul className={styles.headerMenu}>
    {listItems.map((item) => (
        <li>
        <Link to={item.link}>{item.name}</Link>
        </li>
    ))}
      </ul>
    </>
  );
};

export default HamburgerMenu;