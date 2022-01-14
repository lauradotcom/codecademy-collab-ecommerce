import React from 'react'
import { graphql } from 'gatsby';

import ProductActions from '../../page-components/ProductPage/Sections/ProductActions';
import ProductDetails from '../../page-components/ProductPage/Sections/ProductDetails';
// styles
import { main, section, detailsActions } from "../../page-components/ProductPage/ProductPage.module.css";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function ProductTemplate({ data }) {
  const product = data.productsJson;

  return (
    <section key={product.id} className={section}>
      <GatsbyImage image={getImage(product.images[0])} alt={product.title} />
      <div className={detailsActions}>
        <ProductDetails product={product} />
        <ProductActions product={product} />
      </div>
    </section>
  );
}

export const query = graphql`
  query getAllProducts($productId: String) {
    productsJson(productId: { eq: $productId }) {
      description
      discount
      id
      name
      price
      productId
      images {
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default ProductTemplate
