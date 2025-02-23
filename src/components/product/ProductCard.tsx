import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import { TagOutlined } from '@ant-design/icons';
import ButtonBuyNow from './../button/ButtonBuyNow';
interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className='bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow'
      onClick={handleClick}
    >
      <div className='relative'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-64 object-contain p-4'
        />
        <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full '>
          <TagOutlined className='mr-1' />
          <span className='text-sm'>{product.category}</span>
        </div>
      </div>

      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2 line-clamp-2 min-h-[56px]'>
          {product.title}
        </h3>
        <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
          {product.description}
        </p>

        <div className='bg-green-50 rounded-xl p-4 flex justify-between items-center'>
          <div className='flex flex-col items-center'>
            <p className='text-gray-600 text-xs font-semibold'>Giá Tiền</p>
            <p className='text-green-600 text-base font-bold'>
              {product.price.toLocaleString()} $
            </p>
          </div>

          <ButtonBuyNow
            product={product}
            variant='inline'
            buttonText='Mua ngay'
            buttonClassName='bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors'
            showQuantityControls={true}
            initialQuantity={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
