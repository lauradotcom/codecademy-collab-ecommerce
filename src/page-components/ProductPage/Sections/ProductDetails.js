import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { root } from './ProductDetails.module.css';


const ProductDetails = ({ product }) => {

  return (
    <div className={root}>
      <h2>{product.name}</h2>
      <h2>${product.price}.00</h2>
      <p>
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
