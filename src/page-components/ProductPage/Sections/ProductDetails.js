import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { formatPrice } from "../../../lib/helpers";
import { root } from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.productTitle}>
        {product.name}
      </h2>
      <div className={styles.pricesContainer}>
        <h2 className={styles.price}>
          ${(product.price * product.discount).toFixed(2)}
        </h2>
        <h2 className={styles.discountPrice}>
          ${product.price.toFixed(2)}
        </h2>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
