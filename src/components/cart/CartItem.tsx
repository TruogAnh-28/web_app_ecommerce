import React from 'react';
import { CartItemType } from '../../types/cart';
import { useCart } from '../../context/CartContext';
import { DeleteOutlined } from '@ant-design/icons';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className='flex items-center gap-4 mb-4 pb-4 border-b'>
      <img
        src={item.image}
        alt={item.title}
        className='w-16 h-16 object-contain'
      />
      <div className='flex-1'>
        <h3 className='font-semibold line-clamp-1'>{item.title}</h3>
        <p className='text-sm text-gray-600'>
          ${item.price.toFixed(2)} x {item.quantity}
        </p>
        <div className='flex items-center gap-2 mt-2'>
          <button
            onClick={() =>
              updateQuantity(item.id, Math.max(0, item.quantity - 1))
            }
            className='px-2 py-1 bg-gray-200 rounded'
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className='px-2 py-1 bg-gray-200 rounded'
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className='text-red-600 hover:text-red-700'
      >
        <DeleteOutlined style={{ fontSize: 20 }} />
      </button>
    </div>
  );
};
