import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";

import { BankService } from "@/features/banks/services/bank.service";
import { updateBankStatusSchema } from "@/features/banks/validations/update-bank-status.schema";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  request: NextRequest,
  { params }: Params
) {
  try {
    const body = await request.json();

    const data = updateBankStatusSchema.parse(body);

    const { id } = await params;

    const service = new BankService();

    const bank = await service.updateStatus(
      id,
      data.status
    );

    return ApiResponse.success(
      bank,
      "Bank status updated successfully."
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}