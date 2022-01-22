import * as React from "react";
import { graphql } from "gatsby";
import ProductsPage from "../../page-components/ProductsPage";

const Product = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return <ProductsPage products={products} />;
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Product;
