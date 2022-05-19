export interface Product {
  id?: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  availability: boolean;
  imageUrl: string;
  bestseller: boolean;
  category?: string;
}
