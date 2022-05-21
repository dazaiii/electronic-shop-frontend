export interface ProductOrder {
  id: number;
  productId: number;
  orderDate: Date;
  productName: string;
  productPrice: number;
  productAmount: number;
  productImageUrl: string;
  totalPrice: number;
}
