import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { formatPrice } from "../../../lib/helpers";
import { root } from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  return (
    <div className={root}>
      <h2>{product.name}</h2>
      <h2>{formatPrice(product.price)}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
