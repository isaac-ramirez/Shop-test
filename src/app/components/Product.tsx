'use client';

import { Product as ProductType } from '@/app/types/products';
import styles from '@/app/css/components/Product.module.css';
import utils from '@/app/css/utilities/utils.module.css';
import Image from 'next/image';
import Price from '@/app/components/Price';
import Button from '@/app/components/Button';
import Link from 'next/link';
import EditIcon from '@/../../public/edit.svg';
import CloseIcon from '@/../../public/close.svg';
import { useState } from 'react';

interface ProductProps extends ProductType {
  handleAmountChange: ({ id, amount }: { id: number; amount: number }) => void;
  handleAddToCart: ({ id }: { id: number }) => void;
  handleNameChange: ({ id, name }: { id: number; name: string }) => void;
}

export default function Product(product: ProductProps) {
  const {
    id,
    name,
    description,
    image,
    price,
    amount,
    currency,
    handleAmountChange,
    handleAddToCart,
    handleNameChange,
  } = product;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(18);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value) return;
    handleAmountChange({ id, amount: parseInt(value) });
  };

  const handleClick = () => {
    handleAddToCart({ id });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleNameChange({ id, name: value });
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFontSize(parseInt(value));
  };

  return (
    <article className={styles['card']} key={id}>
      <figure
        className={styles['icon']}
        onClick={() => setIsEditing(!isEditing)}
      >
        <Image
          className="image"
          src={isEditing ? CloseIcon : EditIcon}
          alt={isEditing ? 'Close icon' : 'Edit icon'}
          width={30}
          height={30}
          blurDataURL={isEditing ? CloseIcon : EditIcon}
        />
      </figure>
      <figure className={styles['image-container']}>
        <Image
          className="image"
          src={image}
          alt={`Product image of ${name}`}
          fill
          style={{ borderRadius: '14px', objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={image}
        />
      </figure>
      <section className={styles['card-body']}>
        <h1
          style={{ fontSize: `${fontSize}px` }}
          className={styles['card-title']}
        >
          {name}
        </h1>
        {isEditing && (
          <>
            <input
              type="text"
              className={styles['edit-name']}
              placeholder="Narcissist Foaming Hand Soap..."
              value={name}
              onChange={handleInputChange}
            />
            <div className={styles['slider-wrapper']}>
              <p className={styles['slider-description']}>{`${fontSize}px`}</p>
              <input
                className={styles['slider']}
                type="range"
                min="8"
                max="40"
                value={fontSize}
                onChange={handleSliderChange}
              />
            </div>
          </>
        )}
        <Price
          id={id}
          price={price}
          amount={amount}
          currency={currency}
          handleChange={handleChange}
        />
        <p className={styles['card-description']}>{description}</p>
        <footer className={styles['card-footer']}>
          <Button clicked={handleClick}>Add to Cart</Button>
          <Link className={utils.hyperlink} href={`#/products/${id}`}>
            Learn More
          </Link>
        </footer>
      </section>
    </article>
  );
}
