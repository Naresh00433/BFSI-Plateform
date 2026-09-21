import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { CouponService } from "@/features/coupons/services/coupon.service";
import { updateCouponSchema } from "@/features/coupons/validations/update-coupon.schema";

const couponService = new CouponService();

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const coupon = await couponService.findById(id);

    return ApiResponse.success(coupon);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const body = await request.json();

    const data = updateCouponSchema.parse(body);

    const coupon = await couponService.update(id, data);

    return ApiResponse.success(coupon, "Coupon updated successfully.");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const result = await couponService.delete(id);

    return ApiResponse.success(result, "Coupon deleted successfully.");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}
