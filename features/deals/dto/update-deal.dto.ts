export interface UpdateDealDto {
  productId?: string;
  title?: string;
  slug?: string;
  description?: string;
  image?: string;

  discount?: number;
  cashback?: number;

  terms?: string;

  validFrom?: Date;
  validUntil?: Date;

  priority?: number;
  featured?: boolean;
}