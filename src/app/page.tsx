'use client';

import styles from '@/app/css/page.module.css';
import Product from '@/app/components/Product';
import { useProducts } from '@/app/hooks/useProducts';

export default function Home() {
  const { products, handleAmountChange, handleAddToCart, handleNameChange } =
    useProducts();

  return (
    <main className={styles['main']}>
      <h2 className={styles['total-amount']}>
        {`Product total amount: 
        ${products.reduce((acc, product) => {
          return acc + product.amount;
        }, 0)}`}
      </h2>
      <section className={styles['grid']}>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            handleAmountChange={handleAmountChange}
            handleAddToCart={handleAddToCart}
            handleNameChange={handleNameChange}
          />
        ))}
      </section>
    </main>
  );
}
