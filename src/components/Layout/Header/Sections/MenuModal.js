import React from "react";
import { Link } from "gatsby";

import * as styles from "./MenuModal.module.css";

const MenuModal = () => {

  const listItems = [
    { link: '/product', name: 'Product' },
    { link: '/test', name: 'Test' },
  ];

  return (
    <div className={styles.root}>
      <nav className={styles.root}>
        <ul className={styles.headerMenu}>
        {listItems.map((item) => (
            <li>
            <Link to={item.link}>{item.name}</Link>
            </li>
        ))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuModal;