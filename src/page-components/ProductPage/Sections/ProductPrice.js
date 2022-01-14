import * as React from "react";
import { formatPrice } from "../../../lib/helpers";
import * as styles from "./ProductPrice.module.css";

const ProductPrice = ({ product }) => {
  return (
    <div className={styles.pricesContainer}>
      <h2 className={styles.price}>
        {product.discount > 0
          ? formatPrice(product.price * product.discount)
          : formatPrice(product.price)}
      </h2>
      {product.discount > 0 && (
        <h2 className={styles.discountPrice}>{formatPrice(product.price)}</h2>
      )}
    </div>
  );
};

export default ProductPrice;
