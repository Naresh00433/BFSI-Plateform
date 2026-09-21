import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { CouponService } from "@/features/coupons/services/coupon.service";
import { createCouponSchema } from "@/features/coupons/validations/coupon.schema";
import { CouponStatus } from "@prisma/client";

const couponService = new CouponService();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const search = searchParams.get("search") || undefined;
    const productId = searchParams.get("productId") || undefined;
    const dealId = searchParams.get("dealId") || undefined;
    const status = searchParams.get("status") || undefined;

    const sortBy =
      (searchParams.get("sortBy") as
        "title" | "code" | "createdAt" | undefined) || "createdAt";

    const sortOrder =
      (searchParams.get("sortOrder") as "asc" | "desc" | undefined) || "desc";

    const result = await couponService.findAll({
      page,
      limit,
      search,
      productId,
      dealId,
      status: status as CouponStatus,
      sortBy,
      sortOrder,
    });

    return ApiResponse.success(result);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createCouponSchema.parse(body);

    const coupon = await couponService.create(data);

    return ApiResponse.success(coupon, "Coupon created successfully.");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}
