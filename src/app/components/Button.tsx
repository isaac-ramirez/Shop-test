import styles from '@/app/css/components/Button.module.css';
import { Button } from '@/app/types/button';

export default function Button({ children, clicked }: Button) {
  return (
    <button className={styles['button']} onClick={clicked}>
      {children}
    </button>
  );
}
