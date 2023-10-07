import styles from '@/app/css/components/Price.module.css';
import { PriceData } from '@/app/types/products';

interface PriceProps extends PriceData {
  id: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Price({
  id,
  price,
  amount,
  currency,
  handleChange,
}: PriceProps) {
  return (
    <section className={styles['price-container']}>
      <div className={styles['price-wrapper']}>
        <span>{price.toFixed(2)}</span>
        <span>{currency}</span>
      </div>
      <input
        className={styles['amount']}
        type="number"
        id={`amount-${id}`}
        name={`amount-${id}`}
        min="1"
        max="100"
        value={amount}
        onChange={(event) => handleChange(event)}
      />
    </section>
  );
}
