import { graphql } from "gatsby";
import React from "react";
import AboutPage from "../page-components/AboutPage";

const About = ({ data }) => {
  const products = data.allProductsJson.nodes;
  return <AboutPage products={products} />;
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

export default About;
