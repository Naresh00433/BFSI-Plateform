import { cookies } from "next/headers";
import { CookieService } from "@/lib/auth";
import { ApiResponse } from "@/lib/api-response";
import { RefreshTokenService } from "@/features/auth/services/refresh-token.service";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const refreshToken =
      cookieStore.get("refresh_token")?.value;

    console.log("Cookie Refresh Token:", refreshToken);

    if (!refreshToken) {
      return ApiResponse.error(
        "Refresh token missing",
        401
      );
    }

    const service = new RefreshTokenService();

    const result = await service.execute(refreshToken);

    await CookieService.setAccessToken(result.accessToken);
    await CookieService.setRefreshToken(result.refreshToken);

    return ApiResponse.success(
      {},
      "Token refreshed successfully"
    );
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return ApiResponse.error(error.message, 401);
    }

    return ApiResponse.error();
  }
}