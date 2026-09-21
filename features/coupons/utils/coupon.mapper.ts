import { Coupon } from "@prisma/client";

export class CouponMapper {
  static toResponse(coupon: Coupon) {
    return {
      id: coupon.id,

      productId: coupon.productId,
      dealId: coupon.dealId,

      code: coupon.code,
      title: coupon.title,

      description: coupon.description,

      discount: coupon.discount,
      cashback: coupon.cashback,

      validFrom: coupon.validFrom,
      validUntil: coupon.validUntil,

      usageLimit: coupon.usageLimit,
      usageCount: coupon.usageCount,

      status: coupon.status,

      createdAt: coupon.createdAt,
      updatedAt: coupon.updatedAt,
    };
  }

  static toResponseList(coupons: Coupon[]) {
    return coupons.map((coupon) => this.toResponse(coupon));
  }
}