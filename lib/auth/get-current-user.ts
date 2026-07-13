import { cookies } from "next/headers";

import { verifyAccessToken } from "./jwt";
import { UnauthorizedError } from "@/lib/errors";

import { UserRepository } from "@/features/auth/repositories/user.repository";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    throw new UnauthorizedError("Unauthorized");
  }

  const payload = await verifyAccessToken(accessToken);

  const repository = new UserRepository();

  const user = await repository.findByEmailOrPhone(
    payload.email ?? payload.phone!
  );

  if (!user) {
    throw new UnauthorizedError("User not found");
  }

  return user;
}