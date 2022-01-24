import * as React from "react";
import { graphql } from "gatsby";
import ProductsPage from "../../page-components/ProductsPage";
import Seo from "../../components/SEO";

const Product = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return (
    <>
      <Seo
        title="Products"
        description="Shop now! Here is our catalog of products for purchase."
      />
      <ProductsPage products={products} />
    </>
  );
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
