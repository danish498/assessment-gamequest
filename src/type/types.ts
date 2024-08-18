export interface TrendingProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export interface TCategoriesData {
  slug: string;
  name: string;
  url: string;
}

export interface TProductDetailsData {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}
