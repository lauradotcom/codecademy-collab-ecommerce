import React from 'react';
import { Link } from 'gatsby';
//
import HamburgerMenu from './Sections/HamburgerMenu';
import CartButton from './Sections/CartButton';
//
import * as styles from './index.module.css';

const Header = ({ showMenu, toggleCart, toggleMenu }) => {

  return (
    <header className={styles.header}>
      <HamburgerMenu 
        className={styles.menuIcon} 
        showMenu={showMenu} 
        toggleMenu={toggleMenu}
      />
      <Link to='/' className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <CartButton 
        className={styles.menuIcon} 
        toggleCart={toggleCart}
      />
    </header>
  );
};

export default Header;
