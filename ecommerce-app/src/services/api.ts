import axios from 'axios';
import { Product } from '../models';

const API_BASE_URL = 'https://fakestoreapi.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const productApi = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },
  
  getProductById: async (id: number): Promise<Product> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },
  
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(`/products/category/${category}`);
    return response.data;
  },
};
