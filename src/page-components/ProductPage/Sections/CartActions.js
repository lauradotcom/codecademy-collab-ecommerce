import * as React from 'react';
// components
import Button from '../../../components/Buttons/MainButton';
// styles
import { root, quantityButton, quantityText } from './CartActions.module.css';

const CartActions = () => {
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div className={root}>
      <div>
        <button
          className={quantityButton}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <span className={quantityText}>{quantity}</span>
        <button
          className={quantityButton}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <Button
        onClick={() =>
          alert(`Thanks for testing the cart!\nQuantity of items: ${quantity}`)
        }
        buttonText='Add to cart'
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
