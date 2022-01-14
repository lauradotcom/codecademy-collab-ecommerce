import * as React from "react";
import * as styles from "./ProductDetails.module.css";
import ProductPrice from "./ProductPrice";
j
const ProductDetails = ({ product }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.productTitle}>{product.name}</h2>
      <ProductPrice product={product} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
