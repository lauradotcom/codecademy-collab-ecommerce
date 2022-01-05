import * as React from "react";
// components
// page sections
import ProductImage from "./Sections/ProductImage";
import ProductDetails from "./Sections/ProductDetails";
import CartActions from "./Sections/CartActions";
// styles
import { main, rightColumn } from "./ProductPage.module.css";

// pull dummy item from data file
import { products } from "../../data/products";

const ProductPage = () => {
  const product = products[0];
  return (
    <>
      <title>Product Page</title>
      <main className={main}>
        <ProductImage image={product.images[0]} />
        <div className={rightColumn}>
          <ProductDetails product={product} />
          <CartActions product={product} />
        </div>
      </main>
    </>
  );
};

export default ProductPage;