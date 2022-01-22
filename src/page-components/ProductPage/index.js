import React from "react";

import ProductActions from "./Sections/ProductActions";
import ProductDetails from "./Sections/ProductDetails";
// styles
import {
  main,
  section,
  detailsActions,
} from "./ProductPage.module.css";
import ProductImageSlider from "../../page-components/ProductPage/Sections/ProductImageSlider";

function ProductPage({ product }) {
  return (
    <main className={main}>
      <section className={section}>
        <ProductImageSlider product={product} />
      </section>
      <div className={detailsActions}>
        <ProductDetails product={product} />
        <ProductActions product={product} />
      </div>
    </main>
  );
}

export default ProductPage;
