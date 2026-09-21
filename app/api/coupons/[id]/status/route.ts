import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { CouponStatus } from "@prisma/client";

import { CouponService } from "@/features/coupons/services/coupon.service";

const couponService = new CouponService();

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const body = await request.json();

    const status = body.status as CouponStatus;

    const allowedStatuses: CouponStatus[] = [
      "DRAFT",
      "ACTIVE",
      "INACTIVE",
      "EXPIRED",
    ];

    if (!allowedStatuses.includes(status)) {
      return ApiResponse.error("Invalid coupon status.");
    }

    const coupon = await couponService.updateStatus(id, status);

    return ApiResponse.success(coupon, "Coupon status updated successfully.");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return ApiResponse.error(message);
  }
}
