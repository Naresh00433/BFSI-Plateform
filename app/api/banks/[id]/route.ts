import { ApiResponse } from "@/lib/api-response";
import { BankService } from "@/features/banks/services/bank.service";
import { NextRequest } from "next/server";
import { updateBankSchema } from "@/features/banks/validations/update-bank.schema";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const service = new BankService();

    const bank = await service.findById(id);

    return ApiResponse.success(bank);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();

    const data = updateBankSchema.parse(body);

    const { id } = await params;

    const service = new BankService();

    const bank = await service.update(id, data);

    return ApiResponse.success(bank, "Bank updated successfully");
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    const service = new BankService();

    const result = await service.delete(id);

    return ApiResponse.success(result);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}
