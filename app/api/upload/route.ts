import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { UploadService } from "@/lib/storage";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return ApiResponse.error("File is required.", 400);
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const service = new UploadService();

    const result = await service.upload({
      buffer,
      fileName: file.name,
      mimeType: file.type,
    });

    return ApiResponse.success(result);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}