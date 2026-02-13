export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  sold: number;
  stock: number;
  seller: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
