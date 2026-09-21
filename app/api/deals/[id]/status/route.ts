import { NextRequest } from "next/server";
import { z } from "zod";

import { ApiResponse } from "@/lib/api-response";
import { DealService } from "@/features/deals/services/deal.service";

const statusSchema = z.object({
  status: z.enum([
    "DRAFT",
    "ACTIVE",
    "INACTIVE",
    "EXPIRED",
  ]),
});

interface Params {
  params: Promise<{ id: string }>;
}

export async function PATCH(
  request: NextRequest,
  { params }: Params,
) {
  try {
    const body = await request.json();

    const { status } = statusSchema.parse(body);

    const { id } = await params;

    const service = new DealService();

    const deal = await service.updateStatus(id, status);

    return ApiResponse.success(
      deal,
      "Deal status updated successfully",
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}