import { cookies } from "next/headers";

import { CookieService } from "@/lib/auth";
import { ApiResponse } from "@/lib/api-response";

import { LogoutService } from "@/features/auth/services/logout.service";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const refreshToken =
      cookieStore.get("refresh_token")?.value;

    if (refreshToken) {
      const service = new LogoutService();

      await service.execute(refreshToken);
    }

    await CookieService.clearTokens();

    return ApiResponse.success(
      {},
      "Logged out successfully"
    );
  } catch (error) {
    console.error(error);

    return ApiResponse.error();
  }
}