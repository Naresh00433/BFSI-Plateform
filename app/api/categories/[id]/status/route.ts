import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { CategoryService } from "@/features/categories/services/category.service";
import { z } from "zod";

const statusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
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

    const service = new CategoryService();

    const category = await service.updateStatus(id, status);

    return ApiResponse.success(
      category,
      "Category status updated successfully",
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}