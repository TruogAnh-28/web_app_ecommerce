import { api } from './api';
import { Product } from '../types/product';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    return api.get('/products');
  }
};