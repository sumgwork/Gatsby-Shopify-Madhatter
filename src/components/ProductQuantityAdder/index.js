import React, { useContext, useState } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import CartContext from 'context/CartContext';

const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);
  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({
      variantId,
      quantity: parseInt(quantity),
    });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          step="1"
          type="number"
          disabled={!available}
        />
        <Button disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};

export default ProductQuantityAdder;
