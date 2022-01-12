import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './ProductDetails.module.css';


const ProductDetails = ({ product }) => {

  return (
    <div className={styles.root}>
      <h2 className={styles.productTitle}>
        {product.name}
      </h2>
      <div style={styles.pricesContainer}>
        <h2 style={styles.price}>
          ${(product.price * product.discount).toFixed(2)}
        </h2>
        <h2 style={styles.discountPrice}>
          ${product.price.toFixed(2)}
        </h2>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
