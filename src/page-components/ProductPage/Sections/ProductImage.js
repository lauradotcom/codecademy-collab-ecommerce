import * as React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { root } from './ProductImage.module.css';

const ProductImage = ({ image }) => {
  return (
    <img
      className={root}
      src={image}
      alt='productImg'
      // placeholder='blurred'
      // layout='fixed'
      // width={200}
      // height={200}
    />
  );
};

export default ProductImage;
