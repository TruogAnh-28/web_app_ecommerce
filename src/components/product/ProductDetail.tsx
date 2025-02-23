import React, { useState } from 'react';
import { StarFilled, TagOutlined } from '@ant-design/icons';
import { Product } from '../../types/product';
interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='mx-auto bg-gray rounded-3xl overflow-hidden'>
      <div className='relative bg-white -mb-12 overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full object-contain h-[33vh]'
        />
        <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full '>
          <TagOutlined className='mr-1' />
          <span className='text-sm'>{product.category}</span>
        </div>
      </div>

      <div className='bg-gray'>
        <div className='relative bg-white mx-4 rounded-xl'>
          <div className='flex justify-between items-center p-4 pb-3'>
            <h2 className='text-lg font-bold text-gray-800'>{product.title}</h2>
          </div>

          <div className='flex flex-row justify-between bg-green-50 px-5 py-3 items-center'>
            <div className='flex flex-col items-center'>
              <p className='text-gray-600 text-xs font-semibold'>Giá Tiền</p>
              <p className='text-green-600 text-base font-bold'>
                {product.price.toLocaleString()} $
              </p>
            </div>

            <div className='flex items-center bg-white rounded-full px-4 py-2 shadow-sm'>
              <StarFilled className='w-4 h-4 text-yellow-400 fill-current' />
              <span className='ml-1 text-gray-600'>{product.rating.rate}</span>
            </div>
          </div>

          <div className='p-4 pt-3'>
            <div className='p-3 pb-1 border border-gray-200 rounded-xl'>
              <h2 className='text-lg font-semibold mb-2'>Mô tả sản phẩm</h2>
              <p
                className={`text-gray-600 text-sm ${
                  !isExpanded
                    ? 'line-clamp-3'
                    : ' max-h-[120px] overflow-y-auto'
                }`}
              >
                {product.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='text-green-600 text-sm mt-2 flex items-center justify-center w-full'
              >
                {isExpanded ? 'Thu gọn' : 'Xem thêm'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
