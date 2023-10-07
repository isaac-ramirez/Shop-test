'use client';

import { useState } from 'react';
import { Product } from '@/app/types/products';
import { results } from '@/app/mocks/results';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(results);

  const handleAmountChange = ({
    id,
    amount,
  }: {
    id: number;
    amount: number;
  }) => {
    const updatedProducts = [...products].map((product) => {
      if (product.id === id) {
        product.amount = amount;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleAddToCart = ({ id }: { id: number }) => {
    console.log(`Element ${id} added to cart`);
  };

  const handleNameChange = ({ id, name }: { id: number; name: string }) => {
    const updatedProducts = [...products].map((product) => {
      if (product.id === id) {
        product.name = name;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return { products, handleAmountChange, handleAddToCart, handleNameChange };
}
