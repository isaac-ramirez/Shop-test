export interface Product extends PriceData {
  id: number;
  name: string;
  description: string;
  image: string;
}

export type PriceData = {
  price: number;
  currency: string;
  amount: number;
};
