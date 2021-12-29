import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = () => {
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
