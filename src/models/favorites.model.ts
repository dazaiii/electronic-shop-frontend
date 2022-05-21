export interface Favorite {
  id: number;
  userId: number;
  productId: number;
  name: string;
  price: number;
  description: string;
  amount: number;
  availability: number;
  imageUrl: string;
  bestseller: boolean;
  categoryId: number;
}
