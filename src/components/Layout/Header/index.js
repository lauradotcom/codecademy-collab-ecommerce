import React, { useState } from 'react';
import { Link } from 'gatsby';
//
import HamburgerMenu from './Sections/HamburgerMenu';
import MenuModal from './Sections/MenuModal';
import CartButton from './Sections/CartButton';
//
import * as styles from './index.module.css';

const Header = ({ toggleCart }) => {

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <HamburgerMenu open={open} setOpen={setOpen} />
      <Link to='/' className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <CartButton toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
