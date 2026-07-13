import { cookies } from "next/headers";

import { verifyAccessToken } from "@/lib/auth";
import { ApiResponse } from "@/lib/api-response";

import { CurrentUserService } from "@/features/auth/services/current-user.service";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const accessToken =
      cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return ApiResponse.error("Unauthorized", 401);
    }

    const payload =
      await verifyAccessToken(accessToken);

    const service = new CurrentUserService();

    const user = await service.execute(
      payload.email ?? payload.phone!
    );

    return ApiResponse.success(user);
  } catch (error) {
    console.error(error);

    return ApiResponse.error("Unauthorized", 401);
  }
}