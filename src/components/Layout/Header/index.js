import React, { useState } from 'react';
import { Link } from 'gatsby';
//
import HamburgerMenu from './Sections/HamburgerMenu';
import MenuModal from '../MenuModal/MenuModal';
import CartButton from './Sections/CartButton';
//
import * as styles from './index.module.css';

const Header = ({ toggleCart, toggleMenu }) => {

  return (
    <header className={styles.header}>
      <HamburgerMenu toggleMenu={toggleMenu} />
      <Link to='/' className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <CartButton toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
