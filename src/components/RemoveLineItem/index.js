import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Icon } from './styles';

const RemoveLineItem = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext);
  const handleClick = () => removeLineItem(lineItemId);
  return (
    <Icon onClick={handleClick}>
      <FaTrashAlt />
    </Icon>
  );
};

export default RemoveLineItem;
