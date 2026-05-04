import { OrderItem } from './order-item.model';

export interface Order {
  id: string;
  userId: string;
  orderDate: Date;
  totalAmount: number;
  status: string;
  items: OrderItem[];
}
