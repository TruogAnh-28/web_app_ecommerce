import React from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import GreetingHeader from '../components/welcome/Greeting';
import ButtonCart from '../components/button/ButtonCart';
const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();
  const { getTotalItems } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <GreetingHeader name='Nguyễn Văn B' />
      <ButtonCart count={getTotalItems()} />
      <div className='px-4 z-10 relative'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
