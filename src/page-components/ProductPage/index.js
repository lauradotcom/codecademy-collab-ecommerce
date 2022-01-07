import * as React from "react";
// components
// page sections
import ProductImage from "./Sections/ProductImage";
import ProductDetails from "./Sections/ProductDetails";
import ProductActions from "./Sections/ProductActions";
// styles
import { main, section, detailsActions } from "./ProductPage.module.css";

// pull dummy item from data file
import { products } from "../../data/products";

const ProductPage = () => {
  // const product = products[0];
  return (
    <>
      <title>Product Page</title>
      <main className={main}>
        {products.map((product) => (
          <section key={product.id} className={section}>
            <ProductImage image={product.images[0]} />
            <div className={detailsActions}>
              <ProductDetails product={product} />
              <ProductActions product={product} />
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default ProductPage;
