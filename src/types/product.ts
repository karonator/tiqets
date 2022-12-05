export interface IProduct {
  id: number;
  title: string;
  summary: string;
  image: string;
  price: number;
  discountedPrice?: number;
  discount_percentage?: number;
}
