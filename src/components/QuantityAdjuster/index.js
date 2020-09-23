import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';

const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  const handleDecrement = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };

  const handleIncrement = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handleDecrement}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrement}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  );
};

export default QuantityAdjuster;
