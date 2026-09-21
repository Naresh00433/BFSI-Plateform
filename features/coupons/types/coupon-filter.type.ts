import { CouponStatus } from "@prisma/client";

export interface CouponFilter {
  page?: number;
  limit?: number;

  search?: string;

  productId?: string;
  dealId?: string;

  status?: CouponStatus;

  sortBy?: "title" | "code" | "createdAt";
  sortOrder?: "asc" | "desc";
}