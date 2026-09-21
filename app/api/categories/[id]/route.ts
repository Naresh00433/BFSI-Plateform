import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { CategoryService } from "@/features/categories/services/category.service";
import { updateCategorySchema } from "@/features/categories/validations/update-category.schema";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: Params,
) {
  try {
    const { id } = await params;

    const service = new CategoryService();

    const category = await service.findById(id);

    return ApiResponse.success(category);
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

    const data = updateCategorySchema.parse(body);

    const { id } = await params;

    const service = new CategoryService();

    const category = await service.update(id, data);

    return ApiResponse.success(
      category,
      "Category updated successfully",
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

    const service = new CategoryService();

    const result = await service.delete(id);

    return ApiResponse.success(result);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}