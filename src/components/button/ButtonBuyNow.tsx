import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

interface ButtonBuyNowProps {
  product: Product;
  variant?: 'fixed' | 'inline';
  buttonText?: string;
  buttonClassName?: string;
  showQuantityControls?: boolean;
  initialQuantity?: number;
  onAddToCart?: (quantity: number) => void;
  modalTitle?: string;
}

const ButtonBuyNow: React.FC<ButtonBuyNowProps> = ({
  product,
  variant = 'fixed',
  buttonText = 'MUA NGAY',
  buttonClassName = '',
  showQuantityControls = true,
  initialQuantity = 1,
  onAddToCart,
  modalTitle = 'Thêm vào giỏ hàng',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addToCart } = useCart();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling for ProductCard
    addToCart(product, quantity);
    onAddToCart?.(quantity);
    setIsModalOpen(false);
    setQuantity(initialQuantity);
  };

  const defaultButtonClasses =
    'bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors';

  const renderButton = () => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsModalOpen(true);
      }}
      className={`${defaultButtonClasses} ${buttonClassName}`}
    >
      {buttonText}
    </button>
  );

  return (
    <>
      {variant === 'fixed' ? (
        <div className='fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg'>
          {renderButton()}
        </div>
      ) : (
        renderButton()
      )}

      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-50 inset-0'
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
        >
          <div
            className='fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-end mb-4'>
              <button onClick={() => setIsModalOpen(false)}>
                <CloseOutlined className='text-gray-500' />
              </button>
            </div>

            <div className='flex items-center gap-4 mb-4 pb-4 border-b'>
              <img
                src={product.image}
                alt={product.title}
                className='w-16 h-16 object-contain bg-gray-100 rounded-lg'
              />
              <div className='flex-1'>
                <h4 className='text-sm font-medium line-clamp-2'>
                  {product.title}
                </h4>
                <div className='flex justify-between items-center mt-1'>
                  <p className='text-green-600 font-bold'>
                    {product.price.toLocaleString()}$ x {quantity}
                  </p>
                  <p className='text-green-600 font-bold'>
                    {(product.price * quantity).toLocaleString()}$
                  </p>
                </div>
              </div>
            </div>

            {showQuantityControls && (
              <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className='w-8 h-8 flex items-center justify-center border rounded-full'
                  >
                    <MinusOutlined />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className='w-8 h-8 flex items-center justify-center border rounded-full'
                  >
                    <PlusOutlined />
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleBuyClick}
              className='w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors'
            >
              {modalTitle}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonBuyNow;
