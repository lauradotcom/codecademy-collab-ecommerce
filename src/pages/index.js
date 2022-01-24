import { graphql } from "gatsby";
import * as React from "react";
import Seo from "../components/SEO";
import HomePage from "../page-components/HomePage";

const Home = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return (
    <>
      <Seo title="Home" />
      <HomePage products={products} />
    </>
  );
};

export const query = graphql`
  {
    allProductsJson {
      nodes {
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

export default Home;
