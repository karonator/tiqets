export interface IRawProduct {
  id: number;
  title: string;
  summary: string;
  image: string;
  price: number;
  product_url: string;
  discount_percentage?: number;
  available_dates?: string[];
}

export interface IProduct {
  id: number;
  title: string;
  summary: string;
  image: string;
  price: number;
  discountedPrice?: number;
  url: string;
}
