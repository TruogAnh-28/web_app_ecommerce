import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
import { CloseOutlined } from '@ant-design/icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useCart();

  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black/50 z-50'>
      <div className='fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto'>
        <div className='sticky top-0 bg-white p-4 border-b'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-bold'>Giỏ hàng</h2>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <CloseOutlined className='text-gray-500' />
            </button>
          </div>
        </div>

        <div className='p-4'>
          {cart.length === 0 ? (
            <div className='text-center py-8'>
              <p className='text-gray-500'>Giỏ hàng trống</p>
            </div>
          ) : (
            <>
              <div className='space-y-4 mb-4'>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className='sticky bottom-0 bg-white pt-4 border-t'>
                <CartTotal />
                <button
                  className='w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mt-4'
                  onClick={() => {
                    clearCart();
                    onClose();
                  }}
                >
                  ĐẶT NGAY
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
