import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { root } from './ProductImage.module.css';

const ProductImage = ({ image, alt }) => {
  return (
    <GatsbyImage className={root} image={getImage(image)} alt={alt} />
  );
};

export default ProductImage;
