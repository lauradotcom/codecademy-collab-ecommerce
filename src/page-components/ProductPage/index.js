import * as React from "react";
import { Link } from "gatsby";
// components
// page sections
import ProductImage from "./Sections/ProductImage";
import ProductPrice from "./Sections/ProductPrice";
// styles
import * as styles from "./ProductPage.module.css";

const ProductPage = ({ products }) => {
  return (
    <>
      <title>Product Page</title>
      <main className={styles.main}>
        {products.map((product) => (
          <section key={product.id} className={styles.section}>
            <Link to={`/products/${product.productId}`}>
              <ProductImage image={product.images[0]} alt={product.name} />
            </Link>
            <div className={styles.detailsActions}>
              <Link to={`/products/${product.productId}`}>
                <h3>{product.name}</h3>
              </Link>
              <ProductPrice product={product} />
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default ProductPage;
