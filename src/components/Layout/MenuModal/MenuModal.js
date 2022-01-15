import React from "react";
import { Link } from "gatsby";

import * as styles from "./MenuModal.module.css";

const MenuModal = ({ toggleMenu }) => {

  const listItems = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About'},
    { link: '/products', name: 'Products' },
  ];

  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <ul>
        {listItems.map((item) => (
            <li>
            <Link to={item.link} onClick={toggleMenu}>{item.name}</Link>
            </li>
        ))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuModal;