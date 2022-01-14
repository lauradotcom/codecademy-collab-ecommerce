import * as React from "react";
import { graphql } from "gatsby";
import ProductPage from "../../page-components/ProductPage";

const Product = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return <ProductPage products={products} />;
};

export const query = graphql`
  {
    allProductsJson {
      nodes {
        description
        discount
        name
        price
        productId
        id
        images {
          childImageSharp {
            gatsbyImageData(layout: FIXED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Product;
