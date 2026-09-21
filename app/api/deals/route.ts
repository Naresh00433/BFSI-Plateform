import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { DealService } from "@/features/deals/services/deal.service";
import { createDealSchema } from "@/features/deals/validations/deal.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createDealSchema.parse(body);

    const service = new DealService();

    const deal = await service.create(data);

    return ApiResponse.success(
      deal,
      "Deal created successfully",
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const service = new DealService();

    const deals = await service.findAll({
      page: Number(searchParams.get("page") ?? 1),
      limit: Number(searchParams.get("limit") ?? 10),

      search: searchParams.get("search") ?? undefined,

      productId:
        searchParams.get("productId") ?? undefined,

      status:
        (searchParams.get("status") as
          | "DRAFT"
          | "ACTIVE"
          | "INACTIVE"
          | "EXPIRED") ?? undefined,

      featured:
        searchParams.get("featured") === null
          ? undefined
          : searchParams.get("featured") === "true",

      sortBy:
        (searchParams.get("sortBy") as
          | "title"
          | "priority"
          | "createdAt") ?? "priority",

      sortOrder:
        (searchParams.get("sortOrder") as
          | "asc"
          | "desc") ?? "asc",
    });

    return ApiResponse.success(deals);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}