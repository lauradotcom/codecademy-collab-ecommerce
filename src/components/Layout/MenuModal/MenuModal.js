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
    <div 
      className={
        showMenu
          ? `${styles.backdrop} ${styles.backdropOpen}`
          : `${styles.backdrop} ${styles.backdropClosed}`
      }
      onClick={toggleMenu}
      onKeyPress={toggleMenu}
      aria-hidden="true"
    > 
      <div
        className={
          showMenu
            ? `${styles.menu} ${styles.menuOpen}`
            : `${styles.menu} ${styles.menuClosed}`
        }
        onClick={e => e.stopPropagation()}
        onKeyPress={e => e.stopPropagation()}
        role="navigation"
      >
        <nav className={styles.nav}>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuModal;