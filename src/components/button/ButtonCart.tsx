import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Cart } from '../cart/Cart';
interface ButtonCartProps {
  count?: number;
}

const ButtonCart: React.FC<ButtonCartProps> = ({ count = 0 }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className='fixed top-20 right-4 z-30 flex items-center justify-center lg:right-'
      >
        <div className='relative'>
          <ShoppingCartOutlined
            style={{ fontSize: 20 }}
            className='w-11 h-11 text-white bg-green-600 rounded-full items-center justify-center'
          />
          {count > 0 && (
            <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center px-1.5'>
              {count}
            </div>
          )}
        </div>
      </button>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
export default ButtonCart;
