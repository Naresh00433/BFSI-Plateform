import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { ProductService } from "@/features/products/services/product.service";
import { updateProductSchema } from "@/features/products/validations/update-product.schema";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: Params,
) {
  try {
    const { id } = await params;

    const service = new ProductService();

    const product = await service.findById(id);

    return ApiResponse.success(product);
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

    const data = updateProductSchema.parse(body);

    const { id } = await params;

    const service = new ProductService();

    const product = await service.update(id, data);

    return ApiResponse.success(
      product,
      "Product updated successfully",
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

    const service = new ProductService();

    const result = await service.delete(id);

    return ApiResponse.success(result);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}