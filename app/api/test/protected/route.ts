import { ApiResponse } from "@/lib/api-response";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

    return ApiResponse.success({
      id: user.id,
      email: user.email,
      phone: user.phone,
      status: user.status,
    });
  } catch (error) {
    return ApiResponse.error(
      error instanceof Error ? error.message : "Unauthorized",
      401
    );
  }
}