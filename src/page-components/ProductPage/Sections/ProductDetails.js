import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { root } from './ProductDetails.module.css';

// I add the styles here because using the external css file didn't work idk why.
// I'm open to suggestions on how to do this better
const productTitle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: '7%'
}
const pricesContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginLeft: '35%',
  marginRight: '35%',
}
const priceStyles = {
  fontWeight: 'bold'
}
const discountPriceStyles = {
  color: 'gray',
  textDecoration: 'line-through',
  fontSize: '1.3rem'
}

const ProductDetails = ({ product }) => {

  return (
    <div className={root}>
      <h2 style={productTitle}>
        {product.name}
      </h2>
      <div style={pricesContainer}>
        <h2 style={priceStyles}>
          ${(product.price * product.discount).toFixed(2)}
        </h2>
        <h2 style={discountPriceStyles}>
          ${product.price.toFixed(2)}
        </h2>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
