import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";

import { createBankSchema } from "@/features/banks/validations/bank.schema";
import { BankService } from "@/features/banks/services/bank.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createBankSchema.parse(body);

    const service = new BankService();

    const bank = await service.create(data);

    return ApiResponse.success(bank, "Bank created successfully");
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

    const service = new BankService();

    const banks = await service.findAll({
      page: Number(searchParams.get("page") ?? 1),
      limit: Number(searchParams.get("limit") ?? 10),
      search: searchParams.get("search") ?? undefined,
      status:
        (searchParams.get("status") as "ACTIVE" | "INACTIVE") ?? undefined,
      sortBy:
        (searchParams.get("sortBy") as
          | "name"
          | "priority"
          | "createdAt") ?? "priority",
      sortOrder:
        (searchParams.get("sortOrder") as "asc" | "desc") ?? "asc",
    });

    return ApiResponse.success(banks);
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse.error(error.message);
    }

    return ApiResponse.error();
  }
}
