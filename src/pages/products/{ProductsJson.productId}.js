import React from "react";
import { graphql } from "gatsby";
import Seo from '../../components/SEO'
import ProductPage from "../../page-components/ProductPage";

function ProductTemplate({ data }) {
  const product = data.productsJson;

  return (
    <>
      <Seo title={product.name} description={product.description} />
      <ProductPage product={product} />
    </>
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default ProductTemplate;
