import { ApiResponse } from "@/lib/api-response";
import { RegisterService } from "@/features/auth/services/register.service";
import { registerSchema } from "@/features/auth/validations/register.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = registerSchema.parse(body);

    const registerService = new RegisterService();

    const user = await registerService.execute(validatedData);

    return ApiResponse.success(
      user,
      "User registered successfully",
      201
    );
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return ApiResponse.error(error.message, 400);
    }

    return ApiResponse.error();
  }
}