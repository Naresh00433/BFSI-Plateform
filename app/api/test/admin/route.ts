import { ApiResponse } from "@/lib/api-response";
import {
  getCurrentUser,
  requireRole,
} from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

    requireRole(user, "SUPER_ADMIN");

    return ApiResponse.success({
      message: "Welcome Super Admin!",
    });
  } catch (error) {
    return ApiResponse.error(
      error instanceof Error ? error.message : "Forbidden",
      403
    );
  }
}