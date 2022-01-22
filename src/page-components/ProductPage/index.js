import React from "react";

import ProductActions from "../ProductsPage/Sections/ProductActions";
import ProductDetails from "../ProductsPage/Sections/ProductDetails";
// styles
import {
  section,
  detailsActions,
} from "../../page-components/ProductsPage/ProductsPage.module.css";
import ProductImageSlider from "../../page-components/ProductPage/Sections/ProductImageSlider";

function ProductPage({ product }) {

  return (
    <section key={product.id} className={section}>
      <ProductImageSlider product={product} />
      <div className={detailsActions}>
        <ProductDetails product={product} />
        <ProductActions product={product} />
      </div>
    </section>
  );
}

export default ProductPage;
