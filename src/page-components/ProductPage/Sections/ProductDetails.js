import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { root } from './ProductDetails.module.css';

const ProductDetails = () => {
  return (
    <div className={root}>
      <h2>Product Name</h2>
      <h2>$38.00</h2>
      <p>
        Product description with lots of details wow here are all the features
        you need to know about and then you will buy! Buy it now!
      </p>
    </div>
  );
};

export default ProductDetails;
