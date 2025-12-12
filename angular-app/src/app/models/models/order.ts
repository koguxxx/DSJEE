export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id?: number;
  customerName: string;
  items?: OrderItem[];
  totalAmount?: number;
  createdAt?: string;
}
