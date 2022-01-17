import React from "react";
import { Link } from "gatsby";

import * as styles from "./MenuModal.module.css";

const MenuModal = ({ showMenu, toggleMenu }) => {

  const listItems = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About'},
    { link: '/products', name: 'Products' },
  ];

  return (
    <div className={showMenu ? `${styles.menu} ${styles.open}` : styles.menu}>
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