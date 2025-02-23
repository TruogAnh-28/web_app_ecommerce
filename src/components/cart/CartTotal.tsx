import React from 'react';
import { useCart } from '../../context/CartContext';
import { sumBy } from 'lodash';

export const CartTotal: React.FC = () => {
  const { cart } = useCart();
  const total = sumBy(cart, (item) => item.price * item.quantity);

  return (
    <div className='text-xl font-bold mt-4'>Tổng tiền: ${total.toFixed(2)}</div>
  );
};
