import * as React from "react";
import { formatPrice } from "../../../lib/helpers";
import * as styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.productTitle}>{product.name}</h2>
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
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
