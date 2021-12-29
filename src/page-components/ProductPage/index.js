import * as React from 'react';
// components
import Header from '../../components/Layout/Header';
// page sections
import ProductImage from './Sections/ProductImage';
import ProductDetails from './Sections/ProductDetails';
import CartActions from './Sections/CartActions';
// styles
import { main, rightColumn } from './ProductPage.module.css';
// asset import
import image1 from '../../images/product1-1.png';

const ProductPage = () => {
  return (
    <>
      <title>Product Page</title>
      <Header />
      <main className={main}>
        <ProductImage image={image1} />
        <div className={rightColumn}>
          <ProductDetails />
          <CartActions />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
