import * as React from "react";
import * as styles from "./ProductDetails.module.css";
import ProductPrice from "../../ProductsPage/Sections/ProductPrice";

const ProductDetails = ({ product }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.productTitle}>{product.name}</h2>
      <div className={styles.productPrice}>
        <ProductPrice product={product} />
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
