import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProductPrice from "./ProductPrice";
import * as styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <section key={product.id} className={styles.section}>
      <Link to={`/products/${product.productId}`}>
        <GatsbyImage
          className={styles.imageContainer}
          imgClassName={styles.image}
          image={getImage(product.images[0])}
          alt={product.name}
        />
      </Link>
      <div className={styles.detailsActions}>
        <Link className={styles.productName} to={`/products/${product.productId}`}>
          <h2>{product.name}</h2>
        </Link>
        <ProductPrice product={product} />
      </div>
    </section>
  );
};

export default ProductCard;
