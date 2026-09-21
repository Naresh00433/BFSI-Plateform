import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { DealService } from "@/features/deals/services/deal.service";
import { updateDealSchema } from "@/features/deals/validations/update-deal.schema";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: Params,
) {
  try {
    const { id } = await params;

    const service = new DealService();

    const deal = await service.findById(id);

    return ApiResponse.success(deal);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}

export async function PUT(
  request: NextRequest,
  { params }: Params,
) {
  try {
    const body = await request.json();

    const data = updateDealSchema.parse(body);

    const { id } = await params;

    const service = new DealService();

    const deal = await service.update(id, data);

    return ApiResponse.success(
      deal,
      "Deal updated successfully",
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}

export async function DELETE(
  request: Request,
  { params }: Params,
) {
  try {
    const { id } = await params;

    const service = new DealService();

    const result = await service.delete(id);

    return ApiResponse.success(result);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}