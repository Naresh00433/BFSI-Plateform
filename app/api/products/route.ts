import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { ProductService } from "@/features/products/services/product.service";
import { createProductSchema } from "@/features/products/validations/product.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createProductSchema.parse(body);

    const service = new ProductService();

    const product = await service.create(data);

    return ApiResponse.success(
      product,
      "Product created successfully",
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

    const service = new ProductService();

    const products = await service.findAll({
      page: Number(searchParams.get("page") ?? 1),
      limit: Number(searchParams.get("limit") ?? 10),

      search: searchParams.get("search") ?? undefined,

      bankId: searchParams.get("bankId") ?? undefined,

      categoryId:
        searchParams.get("categoryId") ?? undefined,

      status:
        (searchParams.get("status") as
          | "DRAFT"
          | "ACTIVE"
          | "INACTIVE") ?? undefined,

      featured:
        searchParams.get("featured") === null
          ? undefined
          : searchParams.get("featured") === "true",

      sortBy:
        (searchParams.get("sortBy") as
          | "name"
          | "priority"
          | "createdAt") ?? "priority",

      sortOrder:
        (searchParams.get("sortOrder") as
          | "asc"
          | "desc") ?? "asc",
    });

    return ApiResponse.success(products);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}