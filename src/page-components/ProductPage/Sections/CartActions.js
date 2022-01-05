import * as React from "react";
import { useDispatch } from "react-redux";
// components
import Button from "../../../components/Buttons/MainButton";
import { addItem } from "../../../state/cartSlice";
// styles
import { root, quantityButton, quantityText } from "./CartActions.module.css";

const CartActions = ({ product }) => {
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
          disabled={quantity <= 30}
        >
          +
        </button>
      </div>
      <Button
        onClick={addItemToCart}
        buttonText="Add to cart"
      />
      <div>
        <span>Free shipping on orders over $50*</span>
        <br />
        <span>Return policy</span>
      </div>
    </div>
  );
};

export default CartActions;
