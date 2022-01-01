import React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../state/cartSlice";

const Header = ({ toggleCart }) => {
  // useSelector accesses Redux state by passing in the cartSelector
  const cart = useSelector(cartSelector);

  const listItems = [
    { link: "/product", name: "Product" },
    { link: "/test", name: "Test" },
  ];

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink}>
        <p>EcommStore</p>
      </Link>
      <ul className={styles.headerMenu}>
        <li>
          {/* REPLACE with CartButton component */}
          <button onClick={toggleCart}>CART</button>
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
