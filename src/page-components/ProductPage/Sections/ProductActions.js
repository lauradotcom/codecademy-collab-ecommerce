import * as React from "react";
import { useDispatch } from "react-redux";
// components
import Button from "../../../components/Buttons/MainButton";
import { addItem } from "../../../state/cartSlice";
import ProductPrice from "../../ProductsPage/Sections/ProductPrice";
// styles
import {
  root,
  quantityButton,
  quantityText,
  addToCartDesktop,
  addToCart,
  productPrice,
  addToCartButton,
} from "./ProductActions.module.css";

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);

  const addItemToCart = () => {
    dispatch(
      addItem({
        ...product,
        quantity: quantity,
      })
    );
  };

  return (
    <div className={root}>
      <div>
        <button
          className={quantityButton}
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className={quantityText}>{quantity}</span>
        <button
          className={quantityButton}
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity >= 30}
        >
          +
        </button>
      </div>
      <div className={addToCartDesktop}>
        <Button onClick={addItemToCart} buttonText="Add to cart" />
      </div>
      <div className={addToCart}>
        <ProductPrice className={productPrice} product={product} />
        <div className={addToCartButton}>
          <Button onClick={addItemToCart} buttonText="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
