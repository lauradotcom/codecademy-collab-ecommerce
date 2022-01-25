import * as React from "react";
import { formatPrice } from "../../../lib/helpers";
import * as styles from "./ProductPrice.module.css";

const ProductPrice = ({ product }) => {
  return (
    <div className={styles.pricesContainer}>
      <span className={styles.price}>
        {product.discount > 0
          ? formatPrice(product.price * (1 - product.discount))
          : formatPrice(product.price)}
      </span>
      {product.discount > 0 && (
        <span className={styles.discountPrice}>{formatPrice(product.price)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
