import * as React from "react";
import * as styles from "./ProductsPage.module.css";
import ProductCard from "./Sections/ProductCard";

const ProductsPage = ({ products }) => {
  return (
    <>
      <title>Products Page</title>
      <main>
        <h1>Products Page</h1>
        <section className={styles.main}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
};

export default ProductsPage;
