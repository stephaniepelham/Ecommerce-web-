export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  inventory: number;
  imageUrl: string;
  createdBy: string; // admin/seller ID
}
