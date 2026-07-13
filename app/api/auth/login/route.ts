import { LoginService } from "@/features/auth/services/login.service";
import { loginSchema } from "@/features/auth/validations/login.schema";
import { CookieService } from "@/lib/auth";
import { ApiResponse } from "@/lib/api-response";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = loginSchema.parse(body);

    const service = new LoginService();

    const result = await service.execute(validatedData);

    await CookieService.setAccessToken(result.accessToken);
    await CookieService.setRefreshToken(result.refreshToken);

    return ApiResponse.success(
      {
        user: result.user,
      },
      "Login successful"
    );
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return ApiResponse.error(error.message, 400);
    }

    return ApiResponse.error();
  }
}