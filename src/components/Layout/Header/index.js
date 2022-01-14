import React from 'react';
import { Link } from 'gatsby';
//
import CartButton from './Sections/CartButton';
//
import * as styles from './index.module.css';

const Header = ({ toggleCart }) => {

  const listItems = [
    { link: '/product', name: 'Product' },
    { link: '/test', name: 'Test' },
  ];

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <ul className={styles.headerMenu}>
        <li>
          <CartButton toggleCart={toggleCart} />
        </li>
        {listItems.map((item) => (
          <li>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
