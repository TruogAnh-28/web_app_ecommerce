import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductDetail from '../components/product/ProductDetail';
import { useProducts } from '../hooks/useProducts';
import ButtonBuyNow from '../components/button/ButtonBuyNow';
import ButtonCart from '../components/button/ButtonCart';
const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();
  const productId = Number(id);
  const { getTotalItems } = useCart();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const product = products.find((p) => p.id === productId);
  if (!product) return <div>Product not found</div>;

  return (
    <div className='container mx-auto '>
      <ProductDetail product={product} />
      <ButtonCart count={getTotalItems()} />
      <div className='fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg'>
        <ButtonBuyNow
          product={product}
          variant='inline'
          buttonText='Mua ngay'
          buttonClassName='w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors'
          showQuantityControls={true}
          initialQuantity={1}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
