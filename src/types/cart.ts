import { Product } from './product';

export interface CartItemType extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItemType[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalItems: () => number;
  clearCart: () => void;
}