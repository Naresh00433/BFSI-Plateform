export type ProductCategory =
  | "credit-card"
  | "personal-loan"
  | "home-loan"
  | "car-loan"
  | "insurance"
  | "savings-account";

export interface Product {
  id: string;

  category: ProductCategory;

  bank: string;

  name: string;

  description: string;

  image: string;

  annualFee?: number;

  interestRate?: number;

  cashback?: string;

  rating: number;

  features: string[];

  tags: string[];

  badge?: string;

  featured: boolean;
}