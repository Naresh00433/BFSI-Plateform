export interface CreateCouponDto {
  productId?: string;
  dealId?: string;

  code: string;
  title: string;

  description?: string;

  discount?: number;
  cashback?: number;

  validFrom?: Date;
  validUntil?: Date;

  usageLimit?: number;
}