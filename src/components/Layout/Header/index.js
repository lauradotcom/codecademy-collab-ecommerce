import React from 'react';
import { Link } from 'gatsby';
//
import HamburgerMenu from './Sections/HamburgerMenu';
import CartButton from './Sections/CartButton';
//
import * as styles from './index.module.css';

const Header = ({ toggleCart }) => {

  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <Link to='/' className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <CartButton toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
