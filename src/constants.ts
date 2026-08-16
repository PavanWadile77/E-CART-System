import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Wireless Headphones',
    description: 'High-quality sound with a sleek, minimalist design. Perfect for everyday use.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Track your health and stay connected with our most advanced smart watch.',
    price: 249.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Leather Weekend Bag',
    description: 'A durable and stylish leather bag for your short trips and adventures.',
    price: 129.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 56
  },
  {
    id: '4',
    name: 'Ergonomic Desk Chair',
    description: 'Stay comfortable during long work hours with our premium ergonomic chair.',
    price: 299.99,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505843490701-5be5d2b33250?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 212
  },
  {
    id: '5',
    name: 'Ceramic Table Lamp',
    description: 'Add a touch of elegance to your room with this beautifully crafted lamp.',
    price: 79.99,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 43
  },
  {
    id: '6',
    name: 'Premium Cotton Hoodie',
    description: 'Cozy and stylish hoodie made from 100% premium cotton for ultimate comfort.',
    price: 64.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 167
  }
];

export const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Furniture', 'Home Decor'];
