import React from 'react'
import { graphql, GatsbyImage, getImage } from 'gatsby';

import ProductActions from '../../page-components/ProductPage/Sections/ProductActions';
import ProductDetails from '../../page-components/ProductPage/Sections/ProductDetails';

function ProductTemplate() {
  const product = {};

  if(!product) {
    return <div>Nothing here yet!</div>
  }

  return (
    <section key={product.id} className={section}>
      <GatsbyImage image={getImage(product.image)} alt={product.title} />
      <div className={detailsActions}>
        <ProductDetails product={product} />
        <ProductActions product={product} />
      </div>
    </section>
  );
}

export default ProductTemplate
