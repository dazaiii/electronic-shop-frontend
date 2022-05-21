export class CartResponse {
  totalPrice: number;
  items: CartBody[];
}

export interface CartBody {
  id: number;
  userId: number;
  productId: number;
  cartAmount: number;
  name: string;
  price: number;
  description: string;
  amount: number;
  availability: number;
  imageUrl: string;
  bestseller: boolean;
  categoryId: number;
  totalPrice: number;
}
